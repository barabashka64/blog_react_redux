import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import { loadState, saveState } from '../localStorage'

export default function configureStore() {
	const logger = createLogger()
	const persistedState = loadState()

	const store = createStore(
		rootReducer,
		persistedState,
		applyMiddleware(logger)
	)

	store.subscribe(() => {
		saveState(store.getState())
	})

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}
	return store
}