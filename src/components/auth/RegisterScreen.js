import React, { useState } from 'react';
import validator from 'validator'; //librería de validator
import {
    Link,
  } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import edit6 from '../../styles/img/edit6.svg'

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
    const [prueba, setprueba] = useState(false)
    const handlePrueba=()=>{
        setprueba(true)
        console.log(prueba);
          
    }

    return (
        <>
        <div  className={prueba?"container ":"container sign-up-mode"}>
      <div className="forms-container">
        <div className="signin-signup">
          
          <form className="sign-up-form" onSubmit={handleRegister}>
          
            <h2 className="title">Regístrate</h2>
            {
            //si msgerror es true imprime esto si es null o undefined no imprime nada
                msgError &&(
                    <div className="auth__alert-error">
            {msgError}
        </div>
                )
            
        }
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
            type="text"
            name="name"
            placeholder="Tu Nombre y Apellido"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
        />

            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input 
              type="email" 
              name="email"
            placeholder="Tu email"
            autoComplete="off"

            value={email}
            onChange={handleInputChange}


              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
        type="password"
        name="password"
        placeholder="Tu contraseña"
        autoComplete="off"

        value={password}
        onChange={handleInputChange}
         />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
        type="password"
        name="password2"
        placeholder="Confirmar contraseña"
        autoComplete="off"
        value={password2}
        onChange={handleInputChange}
         />
            </div>
            <input type="submit" className="btn" value="Registrarse" />
         
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel right-panel">
          <div className="content">
            <h3>¿Ya tienes un usuario?</h3>
            <p>
              Sí ya tienes un usuario creado, ingresa al siguiente botón del Login, y disfruta de las maravillas de 
              Editor Diplo.
            </p>
          
            <Link to="/auth/login"
             onClick={handlePrueba}
           
        className="link">
        Iniciar Sesión
        </Link>
           
          </div>
          <img src={edit6} class="image" alt="" />
        </div>
      </div>
    </div>

        </>
    )
}
