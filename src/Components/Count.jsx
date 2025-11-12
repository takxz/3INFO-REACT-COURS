import { useState } from 'react';
import './Count.css';


export default function Count() {

    const [count, setCount] = useState(0)

    return (
        <div className="count">
            <button onClick={()=> setCount(count+1)}>{count} clicks </button>
        </div>

    )
}