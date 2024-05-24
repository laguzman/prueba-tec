import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducer'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

// The store now has the ability to accept thunk functions in `dispatch`
export default createStore(
    userReducer,
    composeWithDevTools(applyMiddleware(thunk)),

);