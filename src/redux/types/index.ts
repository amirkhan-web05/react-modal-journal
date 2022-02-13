import { TypeRegisterForm, TypeFormData } from './../../types/index';

export enum Users {
  APP_USERS = 'APP/USERS',
  APP_AUTH = 'APP/AUTH',
  APP_REMOVE = 'APP/REMOVE',
  APP_LOGIN = 'APP/LOGIN'
}

export type TypeUsers = {
  type:Users.APP_USERS,
  payload:TypeRegisterForm
}

export type TypeLogin = {
  type: Users.APP_LOGIN,
  payload:TypeFormData
}

export type TypeAuth = {
  type:Users.APP_AUTH,
  payload:null
}

export type TypeRemove = {
  type:Users.APP_REMOVE
}

export type TypesData = TypeUsers | TypeLogin | TypeAuth | TypeRemove