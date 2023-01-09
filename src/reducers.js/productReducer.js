import { PRODUCT } from "../constants";

const productReducer = (state = [], action ) =>{
    if(action.type === PRODUCT.LOAD_SUCCESS ){
        return [...state, ...action.payload]
    }
    return state;
}

export default productReducer;