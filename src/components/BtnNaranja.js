
import React from 'react'
import '../styles/btnNaranja.css'

export const BtnNaranja = ({titulo}) => {
  return (
    <>
        <div className='titulo__boton'><h1>{titulo}</h1><i className="fas fa-arrow-right"></i></div>
    </>
  )
}
