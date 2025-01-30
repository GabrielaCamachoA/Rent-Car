import React, { useContext, useState } from 'react'
import './login.css'
import { contextInfo } from '../context/InfoContext';
import { useNavigate } from 'react-router';

function Login() {
  const { loginUser } = useContext(contextInfo);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginSubmit(event) {
    event.preventDefault();
    loginUser(username,password);
    navigate("/dashboard")
  }
  return (
    <section className='section3'>
      <div className="formulario">
        <h2>Bienvenido a Rent Car</h2>
        <form onSubmit={loginSubmit}>
          <label>Usuario</label>
          <input type="text" onChange={e => setUsername(e.target.value)} value={username} required />
          <label>Contraseña</label>
          <input type="password" onChange={e => setPassword(e.target.value)} value={password} required />
          <button type='submit'>Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login