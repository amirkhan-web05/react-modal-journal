import { login } from './login';
import { auth } from './auth';
import { users } from './users';
import {combineReducers} from 'redux'

export const rootReducers = combineReducers({
  users,
  auth,
  login
})

export type RootState = ReturnType<typeof rootReducers>