import { combineReducers } from 'redux'
import UserReducer from './reducer-users'
import ActiveUserReducer from './active-user-reducer'

const rootReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
})

export default rootReducers
