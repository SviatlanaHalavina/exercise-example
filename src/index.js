import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './data/redux/index'
import Home from './site-modules/home/pages/home'

import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  target
)