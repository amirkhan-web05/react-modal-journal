import { users } from './users';
import { login } from './login';
import { auth } from './auth';
import {combineReducers} from 'redux'

export const rootReducers = combineReducers({
  auth,
  login,
  users
})

export type RootState = ReturnType<typeof rootReducers>