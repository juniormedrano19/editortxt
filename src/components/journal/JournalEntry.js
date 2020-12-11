import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import basura from '../../styles/img/basura.svg'

/*{value}*/
export const JournalEntry = ( {indice,id, date, title, body,titleStart}) => {

    const documentDate=moment(date);
    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );

    

    const handleEntryClick=()=>{
        dispatch(activeNote(id,{
            date, title, body,titleStart
        }));
    }
    const handleDelete=()=>{
          handleEntryClick();
        dispatch(startDeleting(id));
        /* console.log(id); */
    }

  /*   console.log(documentDate); */
  const dateCreated=documentDate.format('dddd');

  const pruebaDate=()=>{

    switch (dateCreated) {
        case 'Monday':
            
            return 'Lunes';
        case 'Tuesday':
        
            return 'Martes';
            case 'Wednesday':
        
                return 'Miércoles';
                case 'Thursday':
        
                    return 'Jueves';
                    case 'Friday':
        
                        return 'Viernes';
                        case 'Saturday':
        
                            return 'Sábado';
                            case 'Sunday':
        
                                return 'Domingo';
    
        default:
            return 'Fecha no válida';
    }
  }




//onClick={handleEntryClick} en journal__entry pointer

    return (
        <div 
        className="journal__entry pointer"
        onClick={handleEntryClick}
        >
      {/*   <div 
        className="journal__entry-picture"
        style={{backgroundSize:'cover', backgroundImage:"url('https://ep01.epimg.net/elpais/imagenes/2019/10/25/album/1572000664_599621_1572022503_noticia_normal.jpg')"}}
        >
        </div> */}
        <div className="journal__entry-body">
        <p className="journal__entry-title">

         {title ? `${title.substring(0,20)}` : (titleStart=`Sin título ${indice+1}` && `Sin título ${indice+1}`)
            
         }
          {/*   Título del archivo {value} */} {/* Sino pone nada por defecto sería Texto 1,2,3, etc */}
        </p>
       {/*  <p className="journal__entry-content">
        {body && `${body.substring(0,47)}` 
        
        }
        {  El texto que se grabará, solo se verá la parte de inicio .......................................... } 
        </p> */}

        </div>
        {/* <div className="journal__entry-data-box">
        {
            
        }
        {pruebaDate()}
            <span>{pruebaDate()}</span>
            {documentDate.format('D')}
            <h4> {documentDate.format('D')} </h4>

           
           
        </div> */}
    {/* <div 
    className="journal__entry-trash"
    onClick={handleDelete}
    >
   <i className="far fa-trash-alt fa-2x journal__entry-color" style={{color:"white"}}></i>
    </div>
            */}
            <div 
            className="journal__entry-icondelete" 
            onClick={handleDelete}
            title="Eliminar Documento">
            <img src={basura} alt=""

style={{width:25}}
/>
            </div>
          
        </div>
    )
}
