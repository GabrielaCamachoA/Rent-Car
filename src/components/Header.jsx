import React, { useContext } from 'react'
import { context } from '../context/ModoDark';
import './header.css'
import { Link } from 'react-router';
import { contextInfo } from '../context/InfoContext';

function Header() {
const { oscuro, setOscuro} = useContext(context)
const {info} = useContext(contextInfo);

  return (
    <header>
        <img src="/logo car.png" className='logo'/>
        <nav>
          <Link to={'/'}>Inicio</Link>
          {info == null ?
          <Link to={'/login'} >Login</Link>:
          <Link to="/dashboard"> {info.username}</Link>
          }
            <button onClick={() => setOscuro(!oscuro)}>
          <img src={oscuro ? 
          "/claro.png" :
          "/oscuro.png"} title="Cambiar modo" className='icon' />
        </button>
        </nav>
    </header>
  )
}

export default Header