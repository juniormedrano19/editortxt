import React, { useEffect, useState } from 'react';
/* import validator from 'validator'; */ //librería de validator
/* import edit1 from '../../styles/img/edit1.svg';
import edit4 from '../../styles/img/edit4.svg'; */
import edit7 from '../../styles/img/edit7.svg'
/* import edit3 from '../../styles/img/edit3.svg'; */
import {Link} from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import {startFacebookLogin, startGoogleLogin, startLoginEmailPassword, startTwitterLogin} from '../../actions/auth'
import { RegisterScreen } from './RegisterScreen';
/* import { removeError, setError } from '../../actions/ui'; */


export const LoginScreen = () => {
  const {loading} = useSelector( state => state.ui );
    const dispatch = useDispatch();
    //Es darle acceso al dispatch, sirve para hacer dispatch de acciones
    const {msgError} = useSelector( state => state.ui );
    const [values, handleInputChange]=useForm({
        email:'',
        password:'',
    })

    const {email, password}= values;

    //SUBMIT DEL FORMULARIO
    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(email); 
     /*   dispatch(login(4555,'Juniorjuo')); */

       /* if(isFormValid()){
            console.log(`Formulario correcto`);
            dispatch(startLoginEmailPassword(email, password));
        }*/
      dispatch(startLoginEmailPassword(email, password));
    }

//instalar librería npm i validator
/* const isFormValid=()=>{
  if( !validator.isEmail(email)){
        dispatch(setError(`El email es incorrecto`));
        console.log(`El email es incorrecto`);
        return false;
    }else if(password.length < 8){
      dispatch(setError(`Contraseña Inválida. Recuerde que las contraseñas deben de tener de  8 caracteres a más`)); 
        console.log(`Contraseña Inválida. Recuerde que las contraseñas deben de tener de  8 caracteres a más`);
        return false;

    }
    dispatch(removeError()) ; 
    return true;
} *///para que en el redux dev tools el msg error aparezca en null

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
/* console.log(sign_up_btn) */

const [prueba, setprueba] = useState(false)
const handlePrueba=()=>{
    setprueba(true)
    console.log(prueba);
      
}

    const handleGoogleLogin=()=>{
        dispatch(startGoogleLogin());
    }

    const handleFacebookLogin=()=>{
        dispatch(startFacebookLogin());
    }

    const handleTwitterLogin=()=>{
            dispatch(startTwitterLogin());
    }

  return (
    <>
    <div className={prueba?"container sign-up-mode":"container "}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Iniciar Sesión</h2>
            <div className="input-field">
              <i className="fas fa-user i"></i>
              <input type="text"
                name="email"
                placeholder="Email"
                autoComplete="off" 
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock i"></i>
              <input
                type="password"
                name="password"
                placeholder="Tu contraseña" 
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <input 
              type="submit" 
              value="Login" 
              className="btn solid"
              disabled={loading}
            />
            <p className="social-text">Iniciar sesión con redes sociales</p>
            <div className="social-media">
              <div 
                className="social-icon facebook"
                onClick={handleFacebookLogin}
              >
                <i class="fab fa-facebook-f"></i>
              </div>
              <div 
                className="social-icon twitter"
                onClick={handleTwitterLogin}
              >
                <i class="fab fa-twitter"></i>
              </div>
              <div 
                className="social-icon google"
                onClick={handleGoogleLogin}
              >
                <i class="fab fa-google"></i>
              </div>
              {/*<a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>¿Eres usuario nuevo?</h3>
            <p>
              Vive una nueva experiencia con Editor Diplo, es un desarrollo 
              freelance, no te arrepentirás de usarlo. ¡Anímate!
            </p>
            <div className="link__border">
              <Link 
                onClick={handlePrueba}
                id="sign-up-btn"
                className="link"
                to="/auth/register">
                Regístrate
              </Link>
            </div>
          </div>
          <img src={edit7} className="image" alt="" />
        </div>
      </div>
    </div>
  </>
  )
}
