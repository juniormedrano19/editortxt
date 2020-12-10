import React from 'react';
import { useSelector } from 'react-redux';
import maskMan from '../../styles/img/maskMan.svg';
import maskWoman from '../../styles/img/maskWoman.svg'

export const NothingSelected = () => {

    const {name} = useSelector( state => state.auth );
 

    return (
        <div className="nothing__main-content">
        <div>
        <div >
        
        <img src={maskMan} alt=""

            style={{width:450}}
        />
        </div>
        </div>
        <div className="nothing__main-parrafo">
        <p style={{fontFamily:'Roboto Slab'}}>
        <p style={{fontFamily:'Roboto Slab', fontWeight:'bold', color:'#259F64'}}>¡El covid ya no podrá separarnos. Desde ahora nos mantendrá mucho más unidos!</p>
            Bienvenido, <span style={{fontWeight:'bold'}}>{name}</span> a Editor Diplo
            <br />
            Por favor, crea un nuevo documento, pulsando
            <br/>
            el botón <i className="fas fa-plus-square fa-1x"></i>, de la parte superior izquierda.
            <br />
            Y si tienes documentos creados pulsa en ellos para 
            <br/>
            mostrarlos en la pantalla.
        </p>
            
        <i className="far fa-file-alt fa-4x mt-5" style={{display:'flex', justifyContent:'center'}}></i>
        </div>
        <img src={maskWoman} alt=""

            style={{width:400}}
        />
        

        </div>
    )
}
