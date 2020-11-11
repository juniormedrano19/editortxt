import Swal from 'sweetalert2'; //importar sweetAlert para mensajes o alertas bonitas
//npm install sweetalert2
import { types } from "../types/types";
import { facebookAuthProvider, firebase, googleAuthProvider, twitterAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from "./ui";

//Crearemos una acción asíncrona
//recibimos como párametro el email and password

export const startLoginEmailPassword=( email, password )=>{

    //retorna un callback, que tiene como párametro el dispatch que viene de thunk
return (dispatch)=>{
/* setTimeout(() => {
    dispatch(login(8952,'Pablo Reta'));
}, 3500); */
 
//Es una acción asíncrona, porque esperará 3 segundos y medio para mostrar la info
//en otras palabras primero resuelve la acción asíncrona, y luego busca en el reducer quien realiza la acción síncrona

 //cuándo quiero trabajar con autenticación siempre llamo a auth, pero esto cuando queremos
            //registrar usar la funcion create user with email password
            //lo importante siempre será el id
            //el displayname aparece en null

            dispatch(startLoading());

            //Loguearme con correo y contraseña usando signInWithEmailAndPassword
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user})=>{
                dispatch(finishLoading());
                console.log(user);
              dispatch(login(user.uid,user.displayName));
             
            })
            .catch(e=>{
                console.log(e);
                dispatch(finishLoading());
                /* Swal.fire('Error','No hay un usuario correspondiente a ese correo y password. El usuario no se encuentra en la BD', 'error') */
                
                Swal.fire('Error',e.message,'error');
           
           
            })






}

}

//TRABAJANDO EL REGISTRO CON EMAIL Y CONTRASEÑA
export const startRegisterWithEmailPasswordName=(email, password, name)=>{
    return (dispatch)=>{
            //cuándo quiero trabajar con autenticación siempre llamo a auth, pero esto cuando queremos
            //registrar usar la funcion create user with email password
            //lo importante siempre será el id
            //el displayname aparece en null
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user})=>{

                //se utiliza la función async await para trabajar la promesa y evitar trabajar con los then



                //user updateprofile, mando un objeto para actualizarlo
               await user.updateProfile({
                    displayName:name
                });
                console.log(user);
              dispatch(login(user.uid,user.displayName));
            }).catch((e)=>{
                console.log(e);
                Swal.fire('Error',e.message,'error');
            })




    }

}




export const startGoogleLogin=()=>{
return (dispatch)=>{ //importante que en una acción asíncrona devuelva el dispatch del thunk
    firebase.auth().signInWithPopup(googleAuthProvider) // muestra el popup devuelve una promesa
    /* .then(userCred=>{
        console.log(userCred);
    }) */
    .then(({user})=>{
        dispatch(login(user.uid,user.displayName))
        console.log(`Bienvenido, estimado ${user.displayName}, con el correo:${user.email}`)
    })
}
   




}


export const startTwitterLogin=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(twitterAuthProvider)
        .then(({user})=>{
            
            dispatch(login(user.uid,user.displayName))
            console.log(`Bienvenido, estimado ${user.displayName}, con el correo:${user.email}`)
            
        })
    }
}



export const startFacebookLogin=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(facebookAuthProvider)
        .then(({user})=>{
            dispatch(login(user.uid,user.displayName))
            console.log(`Bienvenido, estimado ${user.displayName}, con el correo:${user.email}`)
        })
    }
}




//LA ACCION ES UNA SIMPLE FUNCION QUE TIENE COMO PARAMETROS EL UID, Y DISPLAYNAME
//los parentesis reemplaza al return

export const login = (uid, displayName) => ({


        type:types.login,
        payload:{
            uid,
            displayName,
        }
    
 
}
)

//acción asíncrono para el logout
export const startLogout=()=>{

    return async (dispatch) => {

       await firebase.auth().signOut();

       dispatch(logout());

    }


}



export const logout=()=>({
    type: types.logout,

})



