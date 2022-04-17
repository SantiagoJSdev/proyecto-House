
import React from 'react'
import { Nav } from '../components/Nav'

import '../styles/home.css'

export const Home = () => {

  // console.log(img)
  // const refNav = useRef(null)
  // useEffect(() => {
  //   const onChange = entries => {
  //     entries.forEach( entry => {
  //       console.log(entry)
  //       console.log(refNav.current)
  //     })
  //   }
  //   const observer = new IntersectionObserver(onChange, {threshold: 0.5})
  //   observer.observe(refElement.current)
  // }, [])




  return (<>

    <div className='home__container'>

      <header className="home__header">
        <Nav />
      </header>

      <section className='home__search'>
        <article>
          <div className='home__search--nombre'><h3>Arriendo confiable para Estudiantes y Jovenes Pro</h3></div>
          <div className='home__search--input'>
            <div className='input__select'>
              <p>Elige una ciudad</p>
            </div>
            <div className='input__logo'><i class="fas fa-search"></i></div>
          </div>
        </article>
      </section>
      <section className='home__verificados'>
        <article>
          home__verificados 1
        </article>
      </section>
      <section className='home__lugares'>
        <article>
          home__lugares 1
        </article>
      </section>
      <section className='home__randon'>
        <article>
          home__randon 1
        </article>
      </section>
      <section className='home__publica'>
        <article>
          home__publica 1
        </article>
      </section>
      <section className='home__img'>
        <article>
          home__img 1
        </article>
      </section>
      <section className='home__footer'>
        <article>
          <div className='footer__title'>
            <div className='footer__title--1'>
              <div className='title__logo'>
                <div className='title__logo--instagram logo1'><i class="fab fa-instagram"></i></div>
                <div className='title__logo--facebook logo1'><i class="fab fa-facebook-f"></i></div>
                <div className='title__logo--twitter logo1'><i class="fab fa-twitter"></i></div>
              </div>
              <img src='./assets/logo-white.svg' alt='img' />
            </div>
          </div>
          <div className='footer__suscribe'>
            <div className='footer__suscribe--1'>
              <div className='uno__lista'>
                <ul>
                  <li>Sobre nosotros</li>
                  <li>Preguntas Frecuentes</li>
                  <li>Blog</li>
                  <li>Contacto</li>
                </ul>
              </div>
              <div className='uno__direccion'></div>
              <div className='uno__email'></div>
            </div>
          </div>
          <div className='footer__derechos'>
            <div className='footer__derechos--1'>
              <h3>&#169; 2021 Estuhouse. Reservados todos los derechos</h3>
              <p>Términos y Condiciones</p>
              <p>Política de privacidad</p>
            </div>
          </div>
        </article>
      </section>
    </div>






  </>
  )
}
