import { TypeRegisterForm, TypeFormData, TypeUsers } from './../../types/index';

export enum Users {
  APP_DETAILS = 'APP/DETAILS',
  APP_REGISTER = 'APP/REGISTER',
  APP_USER = 'APP/USER',
  APP_DATA = 'APP/DATA',
  APP_AUTH = 'APP/AUTH',
  APP_REMOVE = 'APP/REMOVE',
  APP_LOGIN = 'APP/LOGIN',
  APP_LOADED = 'APP/LOADED',
  APP_ERROR = 'APP/ERROR'
}

export type TypeForm = {
  type:Users.APP_DATA,
  payload:TypeRegisterForm
}

export type TypeLoaded = {
  type:Users.APP_LOADED,
  payload:boolean
}

export type TypeLogin = {
  type: Users.APP_LOGIN,
  payload:TypeFormData
}

export type TypeAuth = {
  type:Users.APP_AUTH,
  payload:null
}

export type TypeUsersData = {
  type: Users.APP_USER,
  payload:TypeUsers[]
}

export type TypeError = {
  type:Users.APP_ERROR,
  payload:string
}

export type TypeRemove = {
  type:Users.APP_REMOVE
  payload:null
}

export type TypesData = TypeForm | TypeLogin | TypeError |  TypeAuth | TypeRemove | TypeUsersData | TypeLoaded