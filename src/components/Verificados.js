

import React, { useState } from 'react'
import '../styles/verificados.css'
import { data } from '../data/data'
import { CardPropiedad } from './CardPropiedad'
import { usePage } from '../hooks/usePage'
import { paginacionClick } from '../helpers/paginacionClick'

export const Verificados = () => {

    const { maximo, page, setpage } = usePage()
    const [first, setfirst] = useState({
        primero: true,
        segundo: false,
        tercero: false,
        cuarto: false,
    })

    return (
        <>
            <section className='home__verificados'>
                <article>
                    <div className='home__verificados--titulo'>
                        <div className='titulo__primero'>
                            <h1>Conoce nuestros alojamientos verificados</h1>
                            <p>Visitamos personalmente estos lugares y podemos
                                decirte que tal como los ves en las fotos son en la realidad</p>
                        </div>
                        <div className='titulo__boton'>Ver más verificados <i className="fas fa-arrow-right"></i></div>
                    </div>
                    <div className='home__verificados--arrendamiento'>
                        {
                            data.slice((page.page - 1) * maximo, ((page.page - 1) * maximo) + maximo)
                                .map(ele => (
                                    <CardPropiedad
                                        key={ele.id}
                                        img={ele.url}
                                        direccion={ele.direccion}
                                        tipo={ele.tipo}
                                        estado={ele.estado}
                                        habitaciones={ele.habitaciones}
                                        bano={ele.bano}
                                        tamano={ele.tamano}
                                        precio={ele.precio}
                                    />
                                ))
                        }

                    </div>
                    <div className='home__verificados--paginacion'>

                        <button onClick={(e) => paginacionClick('primero', setpage, setfirst)} className={first.primero ? 'paginacion__li color' : 'paginacion__li'} ></button>
                        <button onClick={(e) => paginacionClick('segundo', setpage, setfirst)} className={first.segundo ? 'paginacion__li color' : 'paginacion__li'}></button>
                        <button onClick={(e) => paginacionClick('tercero', setpage, setfirst)} className={first.tercero ? 'paginacion__li color' : 'paginacion__li'}></button>
                        <button onClick={(e) => paginacionClick('cuarto', setpage, setfirst)} className={first.cuarto ? 'paginacion__li color' : 'paginacion__li'}></button>
                    </div>
                </article>
            </section>


        </>
    )
}
