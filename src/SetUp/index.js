// Imports
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'

// App Imports
import { store } from './store'
import App from '../../Src/App'


// Client App
const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

// Mount client app
window.onload = () => {
  hydrate(
    <Root/>,
    document.getElementById('app')
  )
}