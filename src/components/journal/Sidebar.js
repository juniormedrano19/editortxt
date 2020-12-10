import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { NoteScreen } from '../notes/NoteScreen';
import { JournalEntries } from './JournalEntries';
import addFile from '../../styles/img/addFile.svg'           


export const Sidebar = () => {

    const hora=new Date().getHours();

    const dispatch = useDispatch();
    const {name} = useSelector( state => state.auth );
    const date=new Date().getDate();
    const month=new Date().getMonth();
    const year=new Date().getFullYear();

const setMonth=()=>{
    switch (month) {
        case 0:
            return "ene" ;   
            case 1:
            return "feb" ;    
            case 2:
            return "mar" ;    
            case 3:
            return "abr" ;    
            case 4:
            return "may" ;    
            case 5:
            return "jun" ;    
            case 6:
            return "jul" ;    
            case 7:
            return "ago" ;    
            case 8:
            return "sep" ;    
            case 9:
            return "oct" ;    
            case 10:
            return "nov" ;    
            case 11:
            return "dic" ;           
    
    
        default:
            return "equivocado";
    }
}


 /*    console.log(state); */

    const handleLogout=()=>{
/* console.log(`click`); */
dispatch(startLogout());
    }

    const handleAdd=()=>{
        dispatch(startNewNote());
    }
    


    return (
       <aside className="journal__sidebar">
           <div className="journal__sidebar-navbar">
           <h3>
           {
                (hora<18)?(<i className="fas fa-sun"></i>):(<i className="fas fa-moon"></i>)


           }
                
               <span> {name}</span>
           </h3>
        {/*    <span>{`${date}-${setMonth()}-${year}`}</span> */}
           <button 
           className="btn"
           onClick={handleLogout}
           >
               Cerrar Sesión
           </button>

           </div>
           <div 
           className="journal__new-entry"
           onClick={handleAdd}
           >
      
        
        <img src={addFile} alt=""

            style={{width:80}}
        />
       
           <p className="mt-5">
               Crear documento
           </p>

           </div>
           <JournalEntries />
       </aside>
    )
}
