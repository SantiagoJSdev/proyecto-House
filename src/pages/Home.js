
import React, { useEffect, useRef } from 'react'
import { Nav } from '../components/Nav'

import '../styles/home.css'

export const Home = () => {

  const refNav = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      // const scrollPx = window.scrollY
      // console.log(scrollPx)
      const ubicacion = refNav.current.getBoundingClientRect()
      console.log(ubicacion)
    } )
    const onChange = entries => {
      entries.forEach( entry => {
        console.log(entry)
        // console.log(refNav.current)
      })
    }
    const observer = new IntersectionObserver(onChange, {threshold: 0.5})
    observer.observe(refNav.current)
  }, [refNav])
  



  return (<>

    <div className='home__container'>

      <header ref={refNav} className="home__header">
        <Nav/>
      </header>

      <section className='home__search'>
        <article>
          home__search 1
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
          home__footer 1
        </article>
      </section>
    </div>






  </>
  )
}
