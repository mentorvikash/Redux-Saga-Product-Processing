import lodingReducer from "./lodingReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import{combineReducers} from 'redux'

const rootReducer = combineReducers({
    load: lodingReducer,
    sucess: productReducer,
    fail: errorReducer,
})

export default rootReducer;