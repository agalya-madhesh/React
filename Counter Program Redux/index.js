import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Store';
import { Provider } from 'react-redux'; 
// provider makes the store available to all components 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
  {/* passes redux store to the provider */}
    <App />
  </Provider>,
  //by giving app component inside provider, any component within app can access the redux store
);

