
import React from 'react'
import '../styles/btnNaranja.css'

export const BtnNaranja = ({titulo}) => {
  return (
    <>
        <div className='titulo__boton'>{titulo}<i className="fas fa-arrow-right"></i></div>
    </>
  )
}
