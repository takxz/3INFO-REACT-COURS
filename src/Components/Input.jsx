import './Input.css';
import { useState } from 'react';

export default function Input({ label,id, type, name, onKeyUp, formatAttendu, messageErreur }) {

    const [erreur, setErreur] = useState(true);

    const keyUp = (value) => {
        onKeyUp(value);
        setErreur(!formatAttendu.test(value));
    }
    


    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} onKeyUp={(e) => keyUp(e.target.value)} pattern={formatAttendu} />
            {erreur && 
            <span>{messageErreur}</span>
            }
            
        </div>
    )
}