
import '../styles/nav.css'

export const Nav = () => {
    return (<>
        <nav className='header__nav'>
            <ul>
                <li className='header__nav--logo'><a href="#">LOGO</a></li>
                <li><a href="#">INICIO</a></li>
                <li><a href="#">CÓMO FUNCIONA </a></li>
                <li><a href="#">PUBLICA TU ALOJAMIENTO</a></li>
                <li><a href="#">BUSCAR</a></li>
                <li><a href="#">CONTÁCTANOS</a></li>
                <li>
                    <div className='header__nav--auth'>
                        <a className='auth__ingresar' href="#">INGRESAR</a>
                        <a href="#">REGISTRO</a>
                    </div>
                </li>
            </ul>
        </nav>
    </>
    )
}
