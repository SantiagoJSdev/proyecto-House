
import React, { useEffect, useRef } from 'react'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { Verificados } from '../components/Verificados'

import '../styles/home.css'

export const Home = () => {
  const container = useRef(null)
  useEffect(() => {
    let reobj = new ResizeObserver(() => {
      console.log(window.innerWidth)
    })
    reobj.observe(container.current)
  }, [])


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

    <div ref={container} className='home__container'>

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
            <div className='input__logo'><i className="fas fa-search"></i></div>
          </div>
        </article>
      </section>
      {/* ///////////verificados////////////////// */}
      
      <Verificados />
      
      {/* ///////////verificados////////////////// */}
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
      <Footer />
    </div>






  </>
  )
}
