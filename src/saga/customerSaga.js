import { put, call, takeEvery } from 'redux-saga/effects'
import { addCustomerAction } from '../store/customerReducer'
import { FETCH_CUSTOMERS } from '../store/customerReducer'


function* fetchCustomersAsync() {
  const data = yield call(() => {
    return fetch('https://reqres.in/api/users').then(res => res.json())
  })
  yield put(addCustomerAction(data.data))
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_CUSTOMERS, fetchCustomersAsync)
}
