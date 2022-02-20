import { Users } from "../types"

const initialState = {
  users:[]
}

type TypeInitialState = typeof initialState

export const users = (state = initialState, action:any):TypeInitialState => {
  switch (action.type) {
    case Users.APP_USER: {
      return {
        ...state,
        users:action.payload
      }
    }

    default:
      return state
  }
}