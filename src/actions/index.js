import { PRODUCT } from "../constants";


// here we define our Action which is responsible for calling the reducer

// Action for product loading
const productLoad = () => ({
    type: PRODUCT.LOAD
})

// Action for product loading sucess
const productSucess = (product) => ({
    type: PRODUCT.LOAD_SUCESS,
    product
}
)

// Action for product loading error
const productError = (error) => ({
    type: PRODUCT.LOAD_FAIL,
    error
})

export {productLoad, productSucess, productError}