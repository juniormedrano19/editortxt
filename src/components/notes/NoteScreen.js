import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'
import { NotesContador } from './NotesContador'
import { NotesFormatBar } from './NotesFormatBar'

export const NoteScreen = () => {

    const {active:docNew} = useSelector( state => state.notes );
    /* console.log(docNew); */

   const  [values, handleInputChange, reset]= useForm(docNew);

   const {body, title}=values;
   const activeId = useRef( docNew.id );

   useEffect(() => {
      //ejecutar la acción si o solo sí el id es diferente
if(docNew.id!==activeId.current){
    reset(docNew);
    activeId.current=docNew.id
}

   }, [docNew, reset])




    return (
        <div className="notes__main-content">
        
        <NotesAppBar />
        <NotesFormatBar />
        <div className="notes__content">

        <input 
            type="text"
            placeholder="Algún título"
            className="notes__title-input"
            name="title"
            value={ title }
            onChange={handleInputChange}

        />

        <textarea
       placeholder="Escriba Aquí"
        className="notes__textarea"
        name="body"
        value= {body}
        onChange={handleInputChange}
        >
{/*  placeholder="What happened today" */}
        </textarea>

      {/*   <div className="notes__image">
            <img 
                src="https://renzlandscapes.com/wp-content/uploads/2016/02/1a-1024x768.jpg"
                alt="imagen"
            />
        </div> */}

        </div>
            <NotesContador />
        </div>
    )
}
