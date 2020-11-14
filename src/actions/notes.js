import { NoteScreen } from "../components/notes/NoteScreen";
import { db } from "../firebase/firebase-config";
import { loadNote } from "../helpers/loadNote";
import { types } from "../types/types";




export const startNewNote = () => {

    return async (dispatch, getState)=>{

//Traer todo el estado de la aplicación
const {uid}=getState().auth;//cogeremos el uid para la BD
/* console.log(uid); */

const newNote={
    title:'',
    body:'',
    date:new Date().getTime(),
}


//Esto es una promesa por eso se hace el async y await
//crear documento db.collection().add() // es como insert in to

//devuelve una promesa, aquí chicos podemos usar el .then o mejor el async/ await
const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
/* console.log(doc); */

dispatch(activeNote(doc.id, newNote));


/* console.log(doc); */


    }
  
}



export const activeNote=(id, note)=>({

    type: types.notesActive,
    payload:{
        id,
        ...note

    }

})

export const startLoadingNotes=(uid)=>{
    return async (dispatch)=>{
        const text=await loadNote(uid);
        dispatch(setNote(text));
    }
}





export const setNote=( notes )=>({

    type: types.notesLoad,
    payload:notes,

})
