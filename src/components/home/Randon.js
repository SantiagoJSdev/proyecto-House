import React from 'react'
import { data } from '../../data/data'
import { BtnNaranja } from '../BtnNaranja'
import { CardPropiedad } from '../CardPropiedad'

import '../../styles/randon.css'

export const Randon = () => {
  return (
    <>
        <article>
          <div className='home__randon--titulo'><h1>Tenemos estos lugares para ti</h1></div>
          <div className='home__randon--filtros'>
            <ul>
              <li>HABITACÍON</li>
              <li>APARTAESTUDIO</li>
              <li>CUPO UNIVERSITARIO</li>
              <li>APARTAMENTO</li>
              <li className='backColor'>TODOS</li>
            </ul>
          </div>
          <div className='home__randon--img'>

            {
              data.slice(0, 3).map(ele => (
                <CardPropiedad
                  key={ele.id}
                  img={ele.url}
                  direccion={ele.direccion}
                  tipo={ele.tipo}
                  estado={ele.estado}
                  habitaciones={ele.habitaciones}
                  bano={ele.bano}
                  tamano={ele.tamano}
                  precio={ele.precio}
                />
              ))
            }
          </div>
          <div className='home__randon--boton'>
            <BtnNaranja
            titulo={'Todos los alojamientos'}
            />
          </div>
        </article>
    </>
  )
}
