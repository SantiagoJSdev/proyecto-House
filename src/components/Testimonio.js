
import React from 'react'
import '../styles/testimonio.css'

export const Testimonio = () => {
    return (
        <>
            <article>
                <div className='home__publica--bienvenido'>
                    <h1>Bienvenido a Estuhouse</h1>
                </div>
                <div className='home__publica--imagenes'>
                    <div className='imagenes__cards'>
                        <img src='../assets/bienvenido/busca.svg' />
                        <h2>Busca</h2>
                        <p>Busca tu alojamiento con las características que quieres.</p>
                    </div>
                    <div className='imagenes__cards'>
                        <img src='../assets/bienvenido/encuentra.svg' />
                        <h2>Encuentra</h2>
                        <p>Elige la opción que va más contigo.</p>
                    </div>
                    <div className='imagenes__cards'>
                        <img src='../assets/bienvenido/reserva.svg' />
                        <h2>Reserva</h2>
                        <p>Te pones en contacto y apartas tu lugar.</p>
                    </div>
                    <div className='imagenes__cards'>
                        <img src='../assets/bienvenido/mudate.svg' />
                        <h2>Múdate</h2>
                        <p>Empaca maletas, múdate.</p>
                    </div>
                </div>
                <div className='home__publica--tituloTestimonio'>
                    <div className='tituloTestimonio__titulo'>
                        <h4>TESTIMONIOS</h4>
                        <p>Esto dicen sobre nosotros</p>
                    </div>
                    <div className='card-container'>
                        <div className='tituloTestimonio__card'>
                            <div className='card__internoImg'></div>
                            <p>Lo que más me gustó fue la vista que tenía desde mi ventana. Gracias</p>
                            <h3>Sebastian Gusdin</h3>
                            <h5>Estudiante de intercambio / Argentina</h5>
                        </div>

                        <div className='tituloTestimonio__card'>
                            <div className='card__internoImg-dos'></div>
                            <p>Tuve distintas opciones y elegí un apartaestudio en el que he estado muy comoda</p>
                            <h3>Carol</h3>
                            <h5>Estudiante de Ingenería Industrial / Malaga, Santander</h5>
                        </div>

                        <div className='tituloTestimonio__card'>
                            <div className='card__internoImg-tres'></div>
                            <p>La habitación estaba muy bien, pero lo que más me gustó fue la familia que me recibío :)</p>
                            <h3>Juan Chaparro</h3>
                            <h5>Estudiante de Microbiología / Ocaña, Santander</h5>
                        </div>
                    </div>
                </div>

            </article>
        </>
    )
}
