import { User } from 'firebase/auth';
import { Users } from "../types";

export const setAuth = (currentUser:User | null) => ({
  type:Users.APP_AUTH,
  payload:currentUser
})

export const setRemove = () => ({
  type:Users.APP_REMOVE,
  payload:null
})