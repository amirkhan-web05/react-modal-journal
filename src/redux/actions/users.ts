import { getUsers } from './../../api/api';
import { TypeUsers } from './../../types/index';
import { TypeUsersData } from './../types';
import { Users } from "../types"
import { Dispatch } from 'react';

export const fetchUsers = () => (dispatch:Dispatch<TypeUsersData>) => {
  getUsers().then(({data}) => {
    dispatch(setUsers(data))
  })
}

export const setUsers = (items:TypeUsers[]):TypeUsersData => ({
  type:Users.APP_USER,
  payload:items
})