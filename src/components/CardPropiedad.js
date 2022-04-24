

import React from 'react'
import '../styles/cardPropiedades.css'


export const CardPropiedad = ( {img, direccion, tipo, estado, habitaciones, bano, tamano, piso, precio}) => {


    
    return (
        <>
            <div className='containerCard'>
                <div className='containerCard__img'>
                    <div className='containerCard__img--img'>
                        <div className='containerCard__img--tipo'>
                            <div className='tipo__aparte'>{tipo}</div>
                            <div className='tipo__verifi'>{estado}</div>
                        </div>
                        <img src={img} alt='img' />
                    </div>
                </div>
                <div className='containerCard__descripcion'>
                    <div className='containerCard__descripcion--titulo'>{direccion}</div>
                    <div className='containerCard__descripcion--logos'>
                        <div className='logos__habitacion'>
                            <i className="fas fa-bed"></i><p>{habitaciones}</p>
                        </div>
                        <div className='logos__habitacion'>
                            <i className="fas fa-bath"></i><p>{bano}</p>
                        </div>
                        <div className='logos__habitacion'>
                            <i className="fas fa-ruler"></i><p>{tamano}</p>
                        </div>
                    </div>
                </div>
                <div className='containerCard__precio'>
                    <div className='containerCard__precio--mensual'>{precio}</div>
                </div>
            </div>


        </>
    )
}
