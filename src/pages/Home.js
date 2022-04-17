
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
        <Nav/>
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
      <section  className='home__publica'>
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
          home__footer 1
        </article>
      </section>
    </div>






  </>
  )
}
