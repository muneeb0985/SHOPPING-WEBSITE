import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import store from './store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-yfjtu3thldxlqgg7.us.auth0.com"
    clientId="N3QueeeccVzjvxe4jlDZpGtU9qEQMgFo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
     <App />
     </Provider>
  </Auth0Provider>
)
