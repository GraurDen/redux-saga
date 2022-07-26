
const defaultState = {
  customers: []
};

export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";

export const FETCH_CUSTOMERS = "FETCH_CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { ...state, customers: action.payload }
    case 'REMOVE_CUSTOMERS':
      return { ...state, customers: state.customers.filter((customer) => customer.id !== action.payload) }
    default:
      return state
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMERS, payload });

export const fetchCustomersAction = () => ({ type: FETCH_CUSTOMERS })