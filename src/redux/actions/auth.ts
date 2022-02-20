import { signInWithEmailAndPassword } from 'firebase/auth';
import { Dispatch } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';
import { Users } from "../types";

export const setLoaded = () => ({
  type:Users.APP_LOADED,
})

export const setAuth = (currentUser:User | null) => ({
  type:Users.APP_AUTH,
  payload:currentUser
})

export const setRemove = () => ({
  type:Users.APP_REMOVE,
  payload:null
})

export const setError = (error:string) => ({
  type:Users.APP_ERROR,
  payload:error
})

export const setLogin = (email:string, password:string) => {
  const auth = getAuth();

  return function (dispatch:Dispatch<any>) {
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      if (user) {
        dispatch(setAuth(user))
      }
    })
    .catch((error) => {
      dispatch(setError(error))
    })
  }
}

export const setRegister = (email:string, password:string) => {
  const auth = getAuth();
  
  return function (dispatch:Dispatch<any>) {    
    createUserWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      if (user) {
        dispatch(setAuth(user))
      } 
    }).catch((error) => {
      dispatch(setError(error))
    });
  }
}

export const setGoogle = () => {
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  return function (dispatch:Dispatch<any>) {
    signInWithPopup(auth, provider)
    .then((result:any) => {
      dispatch(setAuth(result))
    }).catch((error) => {
      dispatch(setError(error))
    });
  }
}

export const setAuthOnState = () => {
  const auth = getAuth()

  return function (dispatch:Dispatch<any>) {
   const subcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(user))
      }

      dispatch(setLoaded())
    })

    return subcribe
  }
}