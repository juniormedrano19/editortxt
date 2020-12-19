import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startDeleting, startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );
    const {title, body} =active
    const date=new Date().getDate();
    const bodyLength=body.length;
   /*  const state = useSelector( state => state ); */
   /*  console.log(state); */

const handleSave=()=>{
    console.log(active);
    dispatch(startSaveNote(active));

}
const handleDelete=()=>{
      
    dispatch(startDeleting(active.id))
}

useEffect(() => {
    console.log("noteappbar");
    dispatch(startSaveNote(active));
}, [dispatch, title, active, bodyLength])

//className="notes__appbar"
    return (
        <div >
            {/* <span>{date} de noviembre 2020</span> */}

            <div>

               {/*  <button 
                className="btn btn-danger"
                onClick={handleDelete}
                >
                        Eliminar Documento
                </button> */}
                {/* <button className="btn">
                    Adjuntar txt
                </button> */}
                {/* <button 
                className="btn"
                onClick={handleSave}
                >
                    Guardar
                </button> */}
            </div>
        </div>
    )
}
