import {takeEvery, put, take, call } from 'redux-saga/effects'

// --- this is our wacher saga
function* rootSaga(){
  yield takeEvery({type: 'HELLO', workerSaga});
}

// --- this is our action get trigger when workersaga revieve an HELLO action
function* workerSaga(){
  console.log("Hello World I am here")

  // --- put is used to dispatch further action and we can even console value of action despached with puts.
  console.log(put({type: 'ANOTHER_ACTION'}))
  yield put({type: 'ANOTHER_ACTION'})
}

// --- Here another login watcher
function* loginWacherSaga(){
  yield take('LOGIN');
  yield call(loginWorkerSaga);
  // yield take('ADD_CART')
  // yield take('BUY')
  yield take('LOGOUT');
  yield call(logoutWorkerSaga)
}

// --- Hear another worker for login
function loginWorkerSaga(){
  console.log("user is logeed in")
}

function logoutWorkerSaga(){
  console.log("user is logged out")
}

export {rootSaga, loginWacherSaga};


// takeEvery -> will trigger for every hit given by user (repeted action possible)
// take -> Only handle one action if simontenous action are just same
// put -> Used to dispatch a new action 
// call -> is used in combination of take to specify that this this action only trigger then once.