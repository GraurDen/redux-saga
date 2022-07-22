import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleWare from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { countWatcher } from "../saga/cashSaga"
import { rootWatcher } from '../saga/sagas';
import { watchFetchUsers } from '../saga/customerSaga';


const sagaMiddleWare = createSagaMiddleWare()

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
})


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
)

sagaMiddleWare.run(rootWatcher);

export default store;