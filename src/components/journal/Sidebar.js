import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
//import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const hora=new Date().getHours();

    const dispatch = useDispatch();
    //const {name} = useSelector( state => state.auth );
 /*    console.log(state); */

    const handleLogout=()=>{
/* console.log(`click`); */
dispatch(startLogout());
    }

    const handleAdd=()=>{
        //dispatch(startNewNote());
    }
    


    return (
       <aside className="journal__sidebar">
           <div className="journal__sidebar-navbar">
           <h3>
           {
                (hora<18)?(<i className="far fa-sun"></i>):(<i className="far fa-moon"></i>)


           }
                
               <span> Usuario</span>
           </h3>
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
           <i className="fas fa-plus-square fa-5x"></i>
           <p className="mt-5">
               Crear documento
           </p>

           </div>
           <JournalEntries />
       </aside>
    )
}
