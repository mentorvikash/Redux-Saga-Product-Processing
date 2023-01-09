import { PRODUCT } from "../constants";

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case PRODUCT.LOAD_FAIL:
            return action.error;
        case PRODUCT.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
}

export default errorReducer;