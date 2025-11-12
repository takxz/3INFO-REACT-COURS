import './App.css'
import Login from './Components/Login'
import Product from './Components/Product'
import Count from './Components/Count';
import User from './Components/User'
import Pagination from './Components/Pagination';
import Input from './Components/Input';
import { useState } from 'react';

export default function App() {

  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch('/product.json')
  //   .then(result => result.json())
  //   .then(data => setProducts(data))
  // }, [setProducts])
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(0);

  return (
<div className="welcome">
  {/* <Count />
  <br />
  <br />

  Bienvenue sur ce site. 
  <br />

  {products.map(product => (
    <Product product={product} />
  ))}
  <br />

<Pagination /> */}
  
<Input label="Email" id="email" type="email" name="email" onKeyUp={(data) => setEmail(data)} formatAttendu={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/} messageErreur="Veuillez entrer un email valide."/>
<Input label="Mot de passe" id="password" type="password" name="password" onKeyUp={(data) => setPassword(data)} formatAttendu={/[a-zA-Z0-9]{6,}/} messageErreur="le MDP doit contenir 6 char ou plus, majuscule, minuscule et chiffre"/>
<Input label="Age" id="age" type="number" name="age" onKeyUp={(data) => setAge(data)} formatAttendu={/[0-9]*/} messageErreur="Entrez un age valide"/>

</div>
  )
}