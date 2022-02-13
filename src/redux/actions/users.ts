import { TypeRegisterForm } from './../../types/index';
import { Users } from './../types/index';

export const setData = (data:TypeRegisterForm) => ({
  type:Users.APP_USERS,
  payload:data
})