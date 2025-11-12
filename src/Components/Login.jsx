import { useState } from 'react';
import './Login.css';
export default function Login() {
    const [email, setEmail] = useState("");
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
                    <input type="password" name="password" id="password" />
                </div>
                <div className="form-group">
                    <button>Connexion</button>
                </div>
            </div>
        </div>
    )
}