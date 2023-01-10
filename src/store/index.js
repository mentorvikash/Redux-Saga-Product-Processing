import {createStore} from 'redux'
import rootReducer from '../reducers.js'

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window._REDUX_DEVTOOLS_EXTENTION_ && window._REDUX_DEVTOOLS_EXTENTION_(),
    )
    return store;
}

export default configureStore;