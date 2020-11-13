//RUTAS PRINCIPALES, LO GENERE PARA PODER MOVERME SI UTILIZAR LA ETIQUETA <A HREF> DEL HTML YA QUE GENERA UNA PEQUEÑA CARGA

import React, { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase-config';
import Loader from 'react-loader-spinner';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();

const [checking, setChecking] = useState(true);

const [isLoggedIn, setisLoggedIn] = useState(false)




  //Mantener el estado de la autenticación
//cuando la autenticación cambia ejecuto un proceso de firebase
  useEffect(() => {
    //ESTO SE CREA UN OBSERVABLE, OBJETO ESPECIAL QUE SE EJECUTA MAS DE UNA VEZ, CUANDO ME LOGUEO CUANDO CAMBIO DE USUARIO
    firebase.auth().onAuthStateChanged((user)=>{
      /* console.log(user); */
      //esto pregunta si el objeto user tiene algo, entonces pregunta si existe el uid, si es null se sale de 
      //ciclo if
      if(user?.uid){
          dispatch(login(user.uid, user.displayName));// mantiene el estado
          setisLoggedIn(true); //ya está autenticado
      }else{
        setisLoggedIn(false); //deslogueado
      }
      setChecking(false);//se pone después de cargar 



    }) 
  }, [dispatch, setChecking, setisLoggedIn]) //solo se ejecuta una vez



  if(checking){
    return(
      //Modificar con un spinner
  /*     <h1>Espere ...</h1> */
      <Loader
      className="auth__loader"
         type="TailSpin"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={30000} 
 
      />
    )
  }







    return (
        <Router>
      <div>
       
        <Switch>
        {/* 
        
        ESTO NOS VA A SERVIR PARA LA PROTECCION DE LAS RUTAS, YA QUE SI EXISTE UN USUARIO QUE NO ESTÁ LOGUEADO
        NO LO VA A DEJAR ENTRAR, POR EL MOMENTO SI PODRÁ PERO GENERAREMOS ESE BLOQUEO
         */}
          <PublicRoute
           path="/auth" 
           component={ AuthRouter }
             isAuthenticated={isLoggedIn}
           />
          <PrivateRoute 
          exact 
          path="/" 
          component={ JournalScreen }
            isAuthenticated={isLoggedIn}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
    )
}
