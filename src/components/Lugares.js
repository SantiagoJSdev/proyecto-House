
import React from 'react'
import '../styles/lugares.css'

export const Lugares = () => {
  return (
    <>
      <article>
        <div className='home__lugares--titulo'>
          <h1>Vive en el lugar que se ajusta a lo que necesitas</h1>
        </div>
        <div className='home__lugares--logo'>
            <div className='logo__habitacion'>
              <div className='logo__habitacion--interno'><p>Habitación</p></div>
            </div>
            <div className='logo__habitacion'>
              <div className='logo__habitacion--interno logo__apartaestudio--interno'><p>Apartaestudio</p></div>
            </div>
            <div className='logo__habitacion'>
              <div className='logo__habitacion--interno logo__cupo--interno'><p>Cupo Universitario</p></div>
            </div>
            <div className='logo__habitacion'>
              <div className='logo__habitacion--interno logo__apartamento--interno'><p>Apartamento</p></div>
            </div>
        </div>
      </article>

    </>
  )
}
