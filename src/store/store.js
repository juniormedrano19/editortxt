import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

//para el tema de ver el redux devtools e implementar el middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
//El combineReducers combina muchos reducers, es un objeto
const reducers=combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes:notesReducer,
})
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), */
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
    
    ); // el createStore sólo recibe un reducer

