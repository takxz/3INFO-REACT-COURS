import { useEffect, useRef, useState } from 'react';
import './UserList.css';
import User from './User';
import Pagination from './Pagination';
import Input from './Input';
import { Search } from 'lucide-react';

export default function UserList({ }) {
    const [users, setUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState();
    const searchButtonRef = useRef();



    useEffect(() => {
        fetch(`http://localhost:3000/user/${page}`, {
            method: "POST"
        })
            .then(result => result.json())
            .then(data => {
                setUsers(data.data);
                setPageCount(Math.ceil(data.count / data.data.length))
            });
    }, [setUsers,page])

    return (
        <div className='user-page'>
            <div className="search">
                <Input id="search-term" name="search-term" format={/.{3,}/} onKeyUp={value => {
                    setSearchTerm(value);
                }} submitRef={searchButtonRef} />
                <button onClick={() => {}} ref={searchButtonRef} disabled={true}><Search /></button>
            </div>
            <div className="user-list">
                {users.map(user => <User user={user} />)}
            </div>
            <Pagination pageCount={pageCount} setPage={setPage} />
        </div>
    )
}