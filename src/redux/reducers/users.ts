import { TypesData, Users } from './../types/index';

const initialState = {
  data: {
    email:null,
    token:null,
    id:''
  }
}

type TypeInitialState = typeof initialState

export const users = (state = initialState, action:TypesData):TypeInitialState => {
  switch (action.type) {
    case Users.APP_USERS: {
      return {
        ...state,
        data:action.payload
      }
    }

    default:
      return state
  }
}

