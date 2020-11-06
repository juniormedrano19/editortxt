import React from 'react';
/* import edit1 from '../../styles/img/edit1.svg';
import edit4 from '../../styles/img/edit4.svg'; */
import edit5 from '../../styles/img/edit5.svg'
/* import edit3 from '../../styles/img/edit3.svg'; */
import {
    Link,
  } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import {startFacebookLogin, startGoogleLogin, startLoginEmailPassword, startTwitterLogin} from '../../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    //Es darle acceso al dispatch, sirve para hacer dispatch de acciones

    const [values, handleInputChange]=useForm({
        email:'',
        password:'',
    })

    const {email, password}= values;

    //SUBMIT DEL FORMULARIO
    const handleLogin=(e)=>{
        e.preventDefault();
       /*  console.log(email, password); */
     /*   dispatch(login(4555,'Juniorjuo')); */

       dispatch(startLoginEmailPassword(email, password));

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
        <div className="auth__section">
        <div className="auth__imagen">
        
        <img src={edit5} alt=""

            style={{width:700}}
        />
        </div>
        <div className="auth__content-secondary">
        <h3 className="auth__title">Iniciar Sesión</h3>
        <form onSubmit={handleLogin}>
        <input 
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="auth__input"
            value={email}
            onChange={handleInputChange}
        />
        <input
        type="password"
        name="password"
        placeholder="Tu contraseña"
        className="auth__input"
        value={password}
        onChange={handleInputChange}
         />
        <button 
        className="btn btn-primary btn-block"
        type="submit"
        >Iniciar Sesión</button>
    
       <div className="auth__social-networks">
           <p>Iniciar sesión con redes sociales</p>
           <div 
    className="google-btn"
    onClick={handleGoogleLogin}
>
    <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
    </div>
    <p className="btn-text">
        <b>
Inicia sesión con Google</b>
    </p>
</div>
  <div 
    className="facebook-btn"
    onClick={handleFacebookLogin}
>
    <div className="facebook-icon-wrapper">
        <img className="facebook-icon" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" alt="google button" />
    </div>
    <p className="btn-text">
        <b>
Inicia sesión con Facebook</b>
    </p>
</div>
 <div 
    className="twitter-btn"
    onClick={handleTwitterLogin}
>
    <div className="twitter-icon-wrapper">
        <img className="twitter-icon" src="https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg" alt="google button" />
    </div>
    <p className="btn-text">
        <b>
Inicia sesión con Twitter</b>
    </p>
</div>
       </div>

        <Link to="/auth/register"
        className="link">
        Crear una nueva cuenta
        </Link>


        </form>
        </div> 
        </div>
        </>
    )
}
