import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'
import { NotesContador } from './NotesContador'
import { NotesFormatBar } from './NotesFormatBar'
import { setNewValue, finishSavedValue, setSavedValue } from '../../actions/notes';

export const NoteScreen = () => {

   const dispatch = useDispatch();

   const {active:docNew} = useSelector( state => state.notes );
   const {saveDocument} = useSelector( state => state.notes );
   const {timeout} = useSelector( state => state.notes );
   const {docValue} = useSelector( state => state.notes );
   //console.log(saveDocument);
   console.log(timeout);
   console.log(docValue);

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

   const editValue=(e)=>{
        //e.preventDefault();
        dispatch(setNewValue(resetTimeout(timeout, setTimeout(saveValue, 400)),e.currentTarget.value));
   }

   const saveValue = () => {
        console.log("saving")
        dispatch(setSavedValue())
        console.log("saved")
        setTimeout(() => dispatch(finishSavedValue()), 1000)
        
    };

    const resetTimeout = (id, newID) => {
        clearTimeout(id)
        return newID   
    }


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
        value= {docValue}
        onChange={editValue}
        >{docValue}
        {/*  placeholder="What happened today" */}
        </textarea>
        <div className={'saved' + (saveDocument ? ' saved-visible' : '')}><p>{(saveDocument ? 'Se esta guardando' : 'Guardado')}</p></div>

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
