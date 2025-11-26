import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function UserDetail(){
    const {id} = useParams();
    const [user, setUser] = useState({});

useEffect(() => {
    fetch(`http://localhost:3000/user/${id}`)
    .then(result => result.json())
    .then(data => setUser(data)); 
}, []);

    return (
        <div className='user'>
            <div className="header">
                <div className="picture">
                    <img src={user.imageUrl}  />
                </div>
            </div>
            <div className="content">
                <div className="name">{`${user.firstName} ${user.lastName}`}</div>
                <div className="email">{user.email}</div>
                <div className="email">{user.jobTitle}</div>
            </div>
        </div>
    )
}