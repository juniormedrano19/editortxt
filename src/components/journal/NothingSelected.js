import React from 'react'
import { useSelector } from 'react-redux'

export const NothingSelected = () => {

    const {name} = useSelector( state => state.auth );
 

    return (
        <div className="nothing__main-content">
        <p>
            Bienvenido, <span style={{fontWeight:'bold'}}>{name}</span> a Editor Diplo
            <br />
            Por favor, crea un nuevo documento, pulsando
            <br/>
            el botón <i className="fas fa-plus-square fa-1x"></i>, de la parte superior izquierda.
        </p>
            
        <i className="far fa-file-alt fa-4x mt-5"></i>

        </div>
    )
}
