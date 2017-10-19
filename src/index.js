import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { routes } from './routes'

import configureStore from './store/configureStore'
import { Router, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';

const store = configureStore()

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
)