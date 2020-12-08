import Swal from 'sweetalert2'
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
    titleStart:'Sin título', 
    date:new Date().getTime(),
}


//Esto es una promesa por eso se hace el async y await
//crear documento db.collection().add() // es como insert in to

//devuelve una promesa, aquí chicos podemos usar el .then o mejor el async/ await
const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
/* console.log(doc); */

dispatch(activeNote(doc.id, newNote));
dispatch(addNewNote(doc.id, newNote));


/* console.log(doc); */


    }
  
}



export const activeNote=(id, note)=>({

    type: types.notesActive,
    payload:{
        id,
        ...note

    }

});

export const addNewNote=(id, note)=>({
type:types.notesAddNew,
payload:{
    id,
    ...note,
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

export const startSaveNote=(note)=>{
return async (dispatch, getState)=>{

    const {uid} = getState().auth;
    
    const noteToFirestore={ ...note };
    delete noteToFirestore.id; //borró el id del spread
//espera
await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
dispatch(refreshNote(note.id, noteToFirestore));
/* Swal.fire('Guardado', `Tu documento ha sido guardado`, 'success'); */
}

}

//Unicamente actualice de mi store, unicamente la que cambia
export const refreshNote=(id, note)=>({
    type: types.notesUpdated,
    payload:{
        id,
        note:{
            id,
            ...note,
        }
    }
})

export const startDeleting=(id)=>{
return async(dispatch, getState)=>{
    const {name} = getState().auth
    const uid=getState().auth.uid;
    const {active}=getState().notes;
    const {title,titleStart}=active
    const messageDocument=()=>{
        if(title){
            return title;
        }else{
             return titleStart;
        }
     }
const nameParsed=name
const nameSplit=nameParsed.split(" ") 

await db.doc(`${uid}/journal/notes/${ id}`).delete();
Swal.fire({
    title: `${nameSplit[0]}, ¿Estás seguro de eliminar ${messageDocument()}?`,
    text: "Recuerda:¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar ahora'
  }).then((result) => {
 
    if (result.isConfirmed) {
     /*    console.log(result); */
        dispatch(deleteNote(id));
      Swal.fire(
        '¡Eliminado!',
        'Tu documento ha sido eliminado',
        'success'
      )
    }
  })
}

}

export const deleteNote=(id)=>({
    type:types.notesDelete,
    payload:id
})


