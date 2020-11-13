import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

export const PrivateRoute = ({
    isAuthenticated, //si está autenticado
    component:Component, //tendría que ser renombrado para que se con C mayúscula
    ...rest //exact , path , etc
}) => {
    //si està autenticado muestra el componente, sino redirige al login
    /* console.log(rest.location.pathname); */ //guarda todos los argumentos de esa ruta;
    /* localStorage.setItem('lastPath', rest.location.pathname); */
    







    return (
      <Route {...rest}
      
        component={(props)=>(

            (isAuthenticated)? (
             

    <Component {...props} />

             
            )
            :
            <Redirect to="/auth/login"/>


        )}



      />
    )
}

PrivateRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}