import { useState } from 'react';
import './App.css'
import Input from './Components/Input';
import UserList from './Components/Userlist';


export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div className="welcome">
      Bienvenu sur ce site.
      <UserList />
      {/* <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        onKeyUp={(data) => setEmail(data)}
        format={/(.*)@(.*)/}
        errorMsg="L'adresse email doit comporter un @"
      />
      <Input
        label="Mot de passe"
        id="password"
        type="password"
        name="password"
        onKeyUp={(data) => setPassword(data)}
        format={/[a-zA-Z0-9]{6,}/}
        errorMsg="Le mot de passe peut contenir des minuscules, majuscules nombres et doit faire au moins 6 caractères"
      />
      <Input
        label="Age"
        id="age"
        type="number"
        name="age"
        onKeyUp={(data) => setAge(data)}
        format={/[0-9]
        errorMsg="L'age doit être un nombre positif"
        />*/}
    </div>
  )
}