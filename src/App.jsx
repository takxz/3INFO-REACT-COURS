import './App.css'
import Login from './Components/Login'
import Product from './Components/Product'
import Count from './Components/Count';
import User from './Components/User'
import { useEffect, useState } from 'react';

export default function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/product.json')
    .then(result => result.json())
    .then(data => setProducts(data))
  }, [setProducts])
  
  const[users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/user/1',
      {
      method: 'POST',
    })
    .then(result => result.json())
    .then(data => setUsers(data.data))
  }, [setUsers])

  return (
<div className="welcome">
  <Count />
  <br />
  <Login />
  <br />

  Bienvenue sur ce site. 
  <br />

  {products.map(product => (
    <Product product={product} />
  ))}
  <br />

  {users.map(user => (
    <User user={user} />
  ))}
</div>
  )
}