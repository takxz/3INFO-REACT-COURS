import './User.css';


export default function User({user}) {


    return (
        <div className='user-card'>
            <div className="header">
                <div className="picture">
                    <img src={user.imageUrl}/>
                </div>
                <div className="name">{user.firstName} {user.lastName}</div>
            </div>
            <div className="content">
                <div className="job">Job : {user.jobTitle}</div>
                <div className="email">Email : {user.email}</div>
            </div>
        </div>
    )
}