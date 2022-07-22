import { all } from 'redux-saga/effects'
import { countWatcher } from './cashSaga'
import { watchFetchUsers } from './customerSaga'


export function* rootWatcher() {
  yield all([countWatcher(), watchFetchUsers()])
}
