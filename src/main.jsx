import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './App'
import { RouterProvider } from 'react-router-dom'
import store from './Components/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>,
)

