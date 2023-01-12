import lodingReducer from "./lodingReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import pageReducer from "./pageReducer";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    load: lodingReducer,
    sucess: productReducer,
    fail: errorReducer,
    nextPage: pageReducer,
})

export default rootReducer;