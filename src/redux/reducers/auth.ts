import { TypesData } from './../types/index';
import { Users } from "../types"

const initialState = {
  user:null,
  loaded:true,
  error:''
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

    case Users.APP_LOADED: {
      return {
        ...state,
        loaded:false
      }
    }

    case Users.APP_REMOVE: {
      return {
        ...state,
        user:null
      }
    }

    case Users.APP_ERROR: {
      return {
        ...state,
        error:action.payload
      }
    }

    default:
      return state
  }
}