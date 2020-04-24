import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducerRoot from './reducers'



const middleware = [thunk]

const initialState = {}

const store = createStore(reducerRoot, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store