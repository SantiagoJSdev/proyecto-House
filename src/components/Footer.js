import '../styles/footer.css'


export const Footer = () => {
  return (

   
      <article>
        <div className='footer__title'>
          <div className='footer__title--1'>
            <div className='title__logo'>
              <div className='title__logo--instagram logo1'><i className="fab fa-instagram"></i></div>
              <div className='title__logo--facebook logo1'><i className="fab fa-facebook-f"></i></div>
              <div className='title__logo--twitter logo1'><i className="fab fa-twitter"></i></div>
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
            <div className='uno__direccion'>
              <div className='uno__direccion--1'>
                <div className='direccion--1__dir'>
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Calle 48 # 28-40 Piso 2 , Bucaramanga Santander</p>
                </div>
                <div className='direccion--1__email'>
                  <i className="fas fa-envelope"></i>
                  <p>hola@estuhouse.com</p>
                </div>
                <div className='direccion--1__numero'>
                  <i className="fas fa-mobile-alt"></i>
                  <p>3185141500</p>
                </div>
              </div>
            </div>
            <div className='uno__email'>
              <p>Promociones y novedades directamente a tu bandeja de entrada</p>
              <form>

                <div>
                  <label>Suscribirme</label>
                  <input
                    name='email'
                    autoComplete='off'
                    placeholder='Email'
                  >
                  </input>
                </div>
              </form>
            </div>
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
    
  )
}
