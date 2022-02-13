import { TypesData } from './../types/index';
import { Users } from "../types"

const initialState = {
  user:null,
}

type TypeInitialState = typeof initialState

export const auth = (state = initialState, action:TypesData):TypeInitialState => {
  switch (action.type) {
    case Users.APP_AUTH: {
      return {
        ...state,
        user:action.payload,
      }
    }

    case Users.APP_REMOVE: {
      return {
        ...state,
        user:null
      }
    }

    default:
      return state
  }
}