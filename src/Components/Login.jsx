import { useState } from 'react';
import './Login.css';

export default function Login({ }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendLogin = () => {
            console.log({
                email,
                password
            })
    }
    return (
        <div className=''>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onKeyUp={(e) => setEmail(e.target.value)}/>
                    {email}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" onKeyUp={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button onClick={sendLogin}>Connexion</button>
                </div>
            </div>
        </div>
    )
}