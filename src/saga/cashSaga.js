import { put, call, takeEvery } from 'redux-saga/effects'
import { addCashAction, getCashAction, ASYNC_ADD_CASH, ASYNC_GET_CASH } from '../store/cashReducer'


const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* addCashWorker() {
  yield delay(1000);
  const data = yield call(() => Number(localStorage.getItem('payload')))
  yield put(addCashAction(data))
}

function* getCashWorker() {
  yield delay(1000);
  const data = yield call(() => Number(localStorage.getItem('payload')))
  yield put(getCashAction(data))
}


export function* countWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, addCashWorker);
  yield takeEvery(ASYNC_GET_CASH, getCashWorker);
}