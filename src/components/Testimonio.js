
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
                        <img src='https://user-images.githubusercontent.com/87577172/176923020-30300437-10f4-48ca-a085-5c553c4e781a.svg' />
                        <h2>Busca</h2>
                        <p>Busca tu alojamiento con las características que quieres.</p>
                    </div>
                    <div className='imagenes__cards'>
                        <img src='https://user-images.githubusercontent.com/87577172/176923131-a971744f-4acc-44a3-939e-d0e92ff49b65.svg' />
                        <h2>Encuentra</h2>
                        <p>Elige la opción que va más contigo.</p>
                    </div>
                    <div className='imagenes__cards'>
                        <img src='https://user-images.githubusercontent.com/87577172/176923218-8bacc873-9606-4748-b561-3b67db3c026e.svg' />
                        <h2>Reserva</h2>
                        <p>Te pones en contacto y apartas tu lugar.</p>
                    </div>
                    <div className='imagenes__cards'>
                        <img src='https://user-images.githubusercontent.com/87577172/176923305-a242aec0-0392-4ea4-9a07-f990217fa7c2.svg' />
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
