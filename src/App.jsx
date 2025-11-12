import './App.css'
import Login from './Components/Login'
import Product from './Components/Product'
import Count from './Components/Count';
import { useEffect, useState } from 'react';

export default function App() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/product.json')
    .then(result => result.json())
    .then(data => setProducts(data))
  }, [setProducts])
  
  return (
<div className="welcome">
  <Count />
  <Login />
  Bienvenue sur ce site. 
  {products.map(product => (
    <Product product={product} />
  ))}
</div>
  )
}