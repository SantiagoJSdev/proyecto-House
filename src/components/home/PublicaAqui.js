
import React from 'react'
import { BtnNaranja } from '../BtnNaranja'

import '../../styles/publicaAqui.css'

export const PublicaAqui = () => {
    return (
        <>
            <article>
                <div className='home__img--container'>
                    <div className='home__img--titulo'>
                        <h1>¿Estás arrendando tu alojamiento?</h1>
                    </div>
                    <div className='home__img--subTitulo'>
                        <h3>Podemos ayudarte</h3>
                    </div>
                    <div className='home__img--boton'>
                        <BtnNaranja
                            titulo={'Publica aquí'}
                        />
                    </div>
                </div>
                <div className='home__img--entidades'>
                    <div className='entidades__uno home__img--agrandar'>
                        <img src='./assets/patrocinadores/4f328e4b15ccea0a5a52526dd2ed3ea7abf33cec.png' />
                    </div>
                    <div className='entidades__uno'>
                        <img src='./assets/patrocinadores/52a7b9120294aba8f6f3aa17e0af1c01444c93a0.jpeg' />
                    </div>
                    <div className='entidades__uno'>
                        <img src='./assets/patrocinadores/dc004836e8919920d9179e3adad59b2a0824375b.jpg' />
                    </div>
                </div>
            </article>
        </>
    )
}
