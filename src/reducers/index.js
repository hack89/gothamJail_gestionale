import { combineReducers } from 'redux'
import officerReducer from './officerReducer'
import criminaReducer from './criminaReducer'
export default combineReducers({
    officer: officerReducer,
    criminal: criminaReducer
})