//store holds the application state and allows us to dispatch actions to change that state

import { legacy_createStore as createStore } from 'redux' //function used to create store
import counterReducer from './Reducer'; 

const store = createStore (counterReducer);
// here we have created a store
// we are passing countReducer function to createStore, 
// which means we are updating the stae of our application based on the actions dispatched

export default store;
