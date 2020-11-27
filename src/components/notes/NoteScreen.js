import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { NotesContador } from './NotesContador';
import { NotesFormatBar } from './NotesFormatBar';
import { NotesLength } from './NotesLength';
import Loader from 'react-loader-spinner';
import MenuFormat from '../../menu/editor'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

/* import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../styles/App.css'; */

export const NoteScreen = () => {

   const dispatch = useDispatch();

    const {active:docNew} = useSelector( state => state.notes );
    /* console.log(docNew); */

   const  [values, handleInputChange, reset]= useForm(docNew);

   const {body, title,id,titleStart}=values;
   const activeId = useRef( docNew.id );

   useEffect(() => {
      //ejecutar la acción si o solo sí el id es diferente
if(docNew.id!==activeId.current){
    reset(docNew);
    activeId.current=docNew.id
}

   }, [docNew, reset])


useEffect(() => {
   /* console.log(values); */
   dispatch(activeNote(values.id, {...values}));
}, [values, dispatch])

   /* const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),

    
  ); */
//dispatch(); acción asíncrona de borrar
  /* const handleDelete=()=>{
      
      dispatch(startDeleting(id))
  }
   */

  const [test, setTest] = useState(false);
  const keyPressHandler = (e) => {
    
        setTest(true);
        /* console.log(test); */
  
        
     
 
  }
  const keyUpHandler=(e)=>{
      setTimeout(()=>{
        setTest(false);
        /* console.log(test); */
      },2000)
    
  }


  useEffect(() => {
    
    window.addEventListener('keydown', keyPressHandler);
    
        window.addEventListener('keyup', keyUpHandler);
   
    
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
      window.removeEventListener('keydown', keyUpHandler);
    };
  },[docNew]);





 





    return (
        <div className="notes__main-content">
        
        <NotesAppBar />
   {/*      <NotesFormatBar /> */}
        <div className="notes__content">
<div className="notes__appbar">
<input 
            type="text"
            placeholder={titleStart}
            className="notes__title-input"
            autoComplete="off"
            name="title"
            value={ title }
            id = "title"
            onChange={handleInputChange}

        />

<div className="spinner">
        {(test)?
            <div className="spinner">
                <p className="spinner-msg">Guardando</p>
                <Loader
                 type="ThreeDots"
                 color="#ddd"
                 height={8}
                 width={30}
                 timeout={5000}/>
            </div>
        :   <div className="spinner">
                <p className="spinner-msg">Guardado</p>
            </div>
        }
    </div>  
     
     <div className="notes__search-box">
 
  {/*
   <div className="notes__search-container">
    <form>
      <input 
      type="text" 
      placeholder="Buscar en el documento" 
      className="notes__search-input"
      name="search"/>
      <button 
      type="submit"
      className="notes__search-btn"
      ><i className="fa fa-search"></i></button>
    </form>
  </div>*/}
</div>
    
</div>
       
      
    {/*   <Editor 
     editorState={editorState}
     onEditorStateChange={setEditorState}
     wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
  placeholder="Escriba Aquí"
      /> */}
<div  className="notes__content">

        <MenuFormat/>

     { /*
      <textarea
       placeholder="Escriba Aquí"
        className="notes__textarea"
        name="body"
        value= {body}
        onChange={handleInputChange}
        >

        </textarea>
        */
      }
</div>
      {/*   <div className="notes__image">
            <img 
                src="https://renzlandscapes.com/wp-content/uploads/2016/02/1a-1024x768.jpg"
                alt="imagen"
            />
        </div> */}

        </div>
   
            <NotesContador />
            <NotesLength />

           {/*  <button
            className="btn btn-danger"
            onClick={handleDelete}
            >
                Eliminar
            </button> */}
        </div>
    )
}
