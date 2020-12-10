import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleting } from '../../actions/notes';
import basura from '../../styles/img/basura.svg'

export const NotesContador = () => {
    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );
    const handleDelete=()=>{
      
        dispatch(startDeleting(active.id))
    }
    return (
        <div className="notes__app-contador">
        <div></div>
               <div 
               className="notes__appbar-subcontador"
               title="Eliminar Documento"
               onClick={handleDelete}
               >
               <img src={basura} alt="" 

style={{width:50}}
/>
               
               </div> 
        </div>
    )
}
