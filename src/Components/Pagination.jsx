import './Pagination.css';
import { useState, useEffect } from 'react';
import User from './User';


export default function Pagination() {
const[users, setUsers] = useState([])
const [currentPage, setCurrentPage] = useState(1)
useEffect(() => {
    fetch(`http://localhost:3000/user/${currentPage}`,
    {
        method: 'POST',
    })
    .then(result => result.json())
    .then(data => setUsers(data.data))
}, [currentPage])

    return (
<>

{users.map(user => (
    <User user={user} />
))}

<div className="pagination">
    <button onClick={ () => {
    setCurrentPage((prev) => prev - 1) }} disabled={currentPage === 1}>  {currentPage - 1} 
    </button>

    <span>{currentPage}</span>

    <button onClick={ () => {
    setCurrentPage((prev) => prev + 1)}}> {currentPage + 1} 
    </button>
</div>

</>
    )
}