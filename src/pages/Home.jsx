import React from 'react'
import './home.css'

function Home() {
  return (
    <main>
      <section className='section1'>
        <div className="info">
          <h2>Muévete con libertad, alquila con confianza en Rent Car</h2>
          <hr />
          <label>Lugar de recogida:</label>
          <input type="text" required />
          <div className="fechas">
            <div className="recogida">
            <label>Fecha y hora de recogida:</label>
            <div className="fechaHora"><input type="datetime-local" /></div>
            </div>
            <div className="devolucion">
            <label>Fecha y hora de devolucion:</label>
            <div className="fechaHora"><input type="datetime-local" /></div>
            </div>
          </div>
          <button>Buscar</button>
        </div>
        <div className="img">
          <img src="/carro.png" alt="" />
        </div>
      </section>
      <section className='section2'>
        <div className="catalogo">
        </div>
      </section>
    </main>
  )
}

export default Home