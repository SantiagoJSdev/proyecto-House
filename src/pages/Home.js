
import React, { useEffect, useRef } from 'react'
import { BtnNaranja } from '../components/BtnNaranja'
import { Footer } from '../components/Footer'
import { PublicaAqui } from '../components/home/PublicaAqui'
import { Randon } from '../components/home/Randon'
import { Lugares } from '../components/Lugares'
import { Nav } from '../components/Nav'
import { Testimonio } from '../components/Testimonio'
import { Verificados } from '../components/Verificados'
import { data } from '../data/data'
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
      <section className='home__verificados'>
        <Verificados />
      </section>
      <section className='home__lugares'>
        <Lugares />
      </section>
      <section className='home__randon'>
        <Randon />
      </section>
      <section className='home__publica'>
        <Testimonio />
      </section>
      <section className='home__img'>
        <PublicaAqui/>
      </section>
      <section className='home__footer'>
        <Footer />
      </section>
    </div>






  </>
  )
}
