import { Users, TypesData } from './../types/index';

const initialState = {
  email:'',
  password:''
}

type TypeInitailState = typeof initialState

export const login = (state = initialState, action:TypesData):TypeInitailState => {
  switch (action.type) {
    case Users.APP_LOGIN: {
      return {
        ...state,
        email:action.payload.email,
        password:action.payload.password
      }
    }

    default:
      return state
  }
}