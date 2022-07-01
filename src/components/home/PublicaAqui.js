
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
                        <img src='https://user-images.githubusercontent.com/87577172/176924198-48d7a3b6-c524-442c-9568-4b8bf2f91394.png' />
                    </div>
                    <div className='entidades__uno'>
                        <img src='https://user-images.githubusercontent.com/87577172/176924311-bf93d219-7cb4-4787-ae22-231d14271d6a.jpeg' />
                    </div>
                    <div className='entidades__uno'>
                        <img src='https://user-images.githubusercontent.com/87577172/176924383-dfba1ba6-244c-494f-9972-7d9b0f93a744.jpg' />
                    </div>
                </div>
            </article>
        </>
    )
}
