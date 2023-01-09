import { PRODUCT } from "../constants";

const lodingReducer = (state= false , action) => {
    switch(action.type){
        case PRODUCT.LOAD:
        return true;
        case PRODUCT.LOAD_SUCCESS:
        return false;
        case PRODUCT.LOAD_FAIL:
        return false;
        default:
            return state;
    }
}

export default lodingReducer;