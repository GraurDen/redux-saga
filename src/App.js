import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { asyncAddCashAction, asyncGetCashAction } from './store/cashReducer'
import { removeCustomerAction, fetchCustomersAction } from './store/customerReducer'

function App() {

  const dispatch = useDispatch();
  const { cash } = useSelector(state => state.cash)
  const { customers } = useSelector(state => state.customers)



  console.log('%cApp.js line:13 customers', 'color: white; background-color: #26bfa5;', customers);

  const addCash = (num) => {
    localStorage.setItem('payload', num)
    dispatch(asyncAddCashAction())
  }
  const getCash = (num) => {
    localStorage.setItem('payload', num)
    dispatch(asyncGetCashAction())
  }



  const addCustomers = () => {
    dispatch(fetchCustomersAction())
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{ fontSize: '18px', lineHeight: '30px' }}>{cash}</div>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: '30px' }}>
        <button onClick={() => addCash(prompt())}>Пополнить</button>
        <button onClick={() => getCash(prompt())}>Снять</button>
        <button onClick={() => addCustomers()}>Добавить пользователей</button>
      </div>

      {customers.length > 0
        ? <div>
          {customers.map((customer) => {
            return <div className='customer' key={customer.id} onClick={() => removeCustomer(customer)}>id: <b>{customer.id}</b> <br /> Name: <b>{customer.first_name}</b> </div>
          })
          }
        </div>
        : <div>Пользователей нет</div>
      }
    </div>
  );
}

export default App;
