import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers.js'
import createSagaMiddleware from 'redux-saga' 
import helloSaga from '../saga/index.js'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(helloSaga)
    return store;
}

export default configureStore;