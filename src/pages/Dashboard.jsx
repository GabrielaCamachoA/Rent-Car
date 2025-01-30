import React, { useContext } from 'react'
import { contextInfo } from '../context/InfoContext'
import './dashboard.css'

function Dashboard() {
  const {info} = useContext(contextInfo);

  if (info == null) return <main className='page-dashboard'>
    <img src="/alerta.png" alt="" />
    <p>Usuario no encontrado</p>
  </main>
  return <main className='newPage'>
    <span>Username: {info.username}</span>
    <span>Password: {info.password}</span>
  </main>
}

export default Dashboard