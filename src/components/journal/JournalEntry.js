import React from 'react';
/* import moment from 'moment' */
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({value}/* {id, date, title, body} */) => {

  /*   const documentDate=moment(date);
    const dispatch = useDispatch(); */


   /*  const handleEntryClick=()=>{
        dispatch(activeNote(id,{
            date, title, body
        }));
    } */


  /*   console.log(documentDate); */
 /*  const dateCreated=documentDate.format('dddd'); */

  /* const pruebaDate=()=>{

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
 */
//onClick={handleEntryClick} en journal__entry pointer

    return (
        <div 
        className="journal__entry pointer"
        
        >
      {/*   <div 
        className="journal__entry-picture"
        style={{backgroundSize:'cover', backgroundImage:"url('https://ep01.epimg.net/elpais/imagenes/2019/10/25/album/1572000664_599621_1572022503_noticia_normal.jpg')"}}
        >
        </div> */}
        <div className="journal__entry-body">
        <p className="journal__entry-title">
     {/*     {title} */}
            Título del archivo {value} {/* Sino pone nada por defecto sería Texto 1,2,3, etc */}
        </p>
        <p className="journal__entry-content">
        {/* {body} */}
         El texto que se grabará, solo se verá la parte de inicio .......................................... 
        </p>

        </div>
        <div className="journal__entry-data-box">
        {
            
        }
        {/* {pruebaDate()} */}
            <span>Sábado</span>
       {/*      {documentDate.format('D')} */}
            <h4>14</h4>
        </div>
            
        </div>
    )
}
