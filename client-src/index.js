import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import { appInit } from './actions'

import MainPage from './MainPage'

const store = configureStore()
store.dispatch(appInit())

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
)
