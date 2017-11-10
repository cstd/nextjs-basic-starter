import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from '../reducers';

import clientMiddleware from './clientMiddleware';

// const isClient = typeof window !== 'undefined';

// const enhancers = compose(
// 	typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
// 		? window.devToolsExtension && window.devToolsExtension()
// 		: f => f
// );

const createStoreWithMiddleware = applyMiddleware()(createStore);

// export default initialState =>
// 	createStoreWithMiddleware(rootReducer, initialState, enhancers);

const middlewares = [
	clientMiddleware()
]
const enhancers = [
	applyMiddleware(...middlewares)
]

export default initialState => 
	createStoreWithMiddleware(rootReducer, initialState, ...enhancers)