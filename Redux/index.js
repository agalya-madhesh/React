import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import userReducer from './features/user';
//for providing store to the whole App we are importing Provider
//Provider is react's parent component 

const store = configureStore({ 
  // here store is created for managing state between login and profile component
  // store is a global state management because it manages all states
  // when one state passes action to store it manages all states of the component 
  reducer:{
    user : userReducer
  }
  //
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <App /> 
    </Provider>
  </React.StrictMode>
  //for providing store to the whole App, we are putting app tag inside provider tag
  //<Provider store = {store}> - when we pass store inside provider, whatever we do in reducer will 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

