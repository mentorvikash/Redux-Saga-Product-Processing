import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers.js'
import createSagaMiddleware from 'redux-saga' 
import rootSaga from '../saga/index.js'
import { PRODUCT } from '../constants/index.js'


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga)
    // sagaMiddleware.run(loginWacherSaga)
    // the action action that we dispatch from here should in order yield then only root saga get executed
    // LOGIN > ADD_CART > BUY > LOGOUT ? If order was not right then then saga action not get trigger
    // store.dispatch({type: 'LOGIN'})
    // store.dispatch({type: 'LOGOUT'})    
    // store.dispatch({type: 'HELLO'})
    // store.dispatch({type: PRODUCT.LOAD_SUCCESS})
    return store;
}

export default configureStore;