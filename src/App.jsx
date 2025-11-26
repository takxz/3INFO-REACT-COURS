import { useState } from 'react';
import './App.css'
import Input from './Components/Input';
import UserList from './Components/UserList';
import Login from './Components/Login';
import UserDetail from './Components/UserDetail';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import UserLayout from './Components/UserLayout';


export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div className="welcome">
      Bienvenu sur ce site.
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/User">User</Link>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/User" element={<UserLayout />}>
            <Route index element={<UserList />} />
            <Route path=':id' element={<UserDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}