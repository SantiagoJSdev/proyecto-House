
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.css'

export const Nav = () => {

    const [scroll, setScroll] = useState({
        activo: 0,
        resultado: true
    })

    window.addEventListener('scroll', () => {
        const scrollPx = window.scrollY
        setScroll(scroll => ({ ...scroll, activo: scrollPx }))
        if (scrollPx > scroll.activo) {
            setScroll(scroll => ({ ...scroll, activo: scrollPx, resultado: false }))
        } else {
            setScroll(scroll => ({ ...scroll, activo: scrollPx, resultado: true }))
        }
    })

    return (<>
        <nav className={scroll.activo === 0 ? 'header__nav' : scroll.resultado ? 'header__nav-1' : 'activo'}>
            <ul>
                {
                    scroll.activo === 0 ?
                        <li className='header__nav--logo'><img src='https://user-images.githubusercontent.com/87577172/176918428-a54e7662-03ee-4f8b-a65e-fb85552cdea3.svg' alt='img' /></li>
                        :
                        scroll.resultado ?
                            <li className='header__nav--logo'><img src='https://user-images.githubusercontent.com/87577172/176918559-5c122fd6-5a2c-4841-9fda-266bdfab7970.svg' alt='img2' /></li>
                            :
                            ''
                }
                {/* <li className='header__nav--logo'><img src='./assets/logo-white.svg' alt='img'/></li> */}
                <li><Link to={'/'}>INICIO</Link></li>
                <li><Link to={'/'}>CÓMO FUNCIONA </Link></li>
                <li><Link to={'/'}>PUBLICA TU ALOJAMIENTO</Link></li>
                <li><Link to={'/'}>BUSCAR</Link></li>
                <li><Link to={'/'}>CONTÁCTANOS</Link></li>
                <li>
                    <div className='header__nav--auth'>
                        <Link to={'/'} className='auth__ingresar' >INGRESAR</Link>
                        <Link to={'/'}>REGISTRO</Link>
                    </div>
                </li>
                <li>
                <i className="fas fa-bars"></i>
                </li>
            </ul>
        </nav>
    </>
    )
}
