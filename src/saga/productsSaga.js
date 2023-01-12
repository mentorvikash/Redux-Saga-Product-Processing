import { PRODUCT } from '../constants'
import fetchProducts from '../api'

import {takeEvery, select, call, put} from 'redux-saga/effects'
import { productSucess, productError } from '../actions'

const getPage = state => state.nextPage

export default function* watchProductLoad(){
    yield takeEvery( PRODUCT.LOAD, handleProductLoad)
}

function* handleProductLoad(){
    try{
        const page = yield select(getPage);
        const product = yield call(fetchProducts)
        yield put(productSucess(product))
    }catch(err){
        yield put(productError(err.toString())) 
    }


}
