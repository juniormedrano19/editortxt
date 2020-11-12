import React from 'react';
import validator from 'validator'; //librería de validator
import {
    Link,
  } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
    //Importante para hacer el dispatch de la acción se necesita del useDispatch de react-redux;

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui ); //el useSelector devuelve un callback con el estado del Redux dev tools
    //en este caso devuelve auth and ui
    console.log(msgError);

    const [values, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
        password2:'',
    });

    const {name,email,password,password2}=values;

    const handleRegister=(e)=>{
        e.preventDefault();
      /*   console.log(name, email, password, password2); */
        if(isFormValid()){
            console.log(`Formulario correcto`);
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }
    }
    //instalar librería npm i validator
    const isFormValid=()=>{
        if(name.trim().length ===0){
           dispatch(setError(`El nombre y apellido es requerido`)) ;
     /*        console.log(`El nombre y apellido es requerido`); */
            return false; //no hace nada
        }else if( !validator.isEmail(email)){
            dispatch(setError(`El email es incorrecto`));
           /*  console.log(`El email es incorrecto`); */
            return false;
        }else if(password !==password2 || password.length < 8){
          dispatch(setError(`Contraseña Inválida. Recuerde que las contraseñas deben de tener de  8 caracteres a más`)); 
            /* console.log(`Contraseña Inválida. Recuerde que las contraseñas deben de tener de  8 caracteres a más`); */
            return false;

        }
        dispatch(removeError()) ; //para que en el redux dev tools el msg error aparezca en null
        return true;
    }


    return (
        <>
        <div className="auth__box-container">
        <h3 className="auth__title">Regístrese</h3>
        <form onSubmit={handleRegister}>

        {
            //si msgerror es true imprime esto si es null o undefined no imprime nada
                msgError &&(
                    <div className="auth__alert-error">
            {msgError}
        </div>
                )
            
        }

    
        <input 
            type="text"
            name="name"
            placeholder="Tu Nombre y Apellido"
            autoComplete="off"
            className="auth__input"
            value={name}
            onChange={handleInputChange}
        />



        <input 
            type="text"
            name="email"
            placeholder="Tu email"
            autoComplete="off"
            className="auth__input"
            value={email}
            onChange={handleInputChange}
        />
        <input
        type="password"
        name="password"
        placeholder="Tu contraseña"
        autoComplete="off"
        className="auth__input"
        value={password}
        onChange={handleInputChange}
         />

         <input
        type="password"
        name="password2"
        placeholder="Confirmar contraseña"
        autoComplete="off"
        className="auth__input"
        value={password2}
        onChange={handleInputChange}
         />
        <button 
        className="btn btn-primary btn-block mb-5"
        type="submit"
        >Registrarse</button>
      
      
        <Link to="/auth/login"
        className="link">
        ¿Usted ya está registrado?
        </Link>


        </form>
        </div>
        </>
    )
}
