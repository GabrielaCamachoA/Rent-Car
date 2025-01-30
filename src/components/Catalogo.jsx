import React from 'react'

function Catalogo({img, title, price, descrp}) {
  return (
    <div className='carta'>
        <img src={img}/>
        <h2>{title}</h2>
        <p>{descrp}</p>
        <p>{price}</p>
    </div>
  )
}

export default Catalogo