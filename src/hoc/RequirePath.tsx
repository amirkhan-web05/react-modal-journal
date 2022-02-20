import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { setAuthOnState } from '../redux/actions/auth'
import { AUTH_ROUTE } from '../utils'


export const RequirePath: React.FC = ({ children }): JSX.Element => {
  const dispatch = useDispatch()
  const auth = useTypedSelector<User | null>(state => state.auth.user)
  const loaded = useTypedSelector<boolean>(state => state.auth.loaded)
  
  React.useEffect(() => {
    dispatch(setAuthOnState())
  }, [])
    

  if (loaded) {
    return <></>
  }

  if (!auth) {
    return <Navigate to={`${AUTH_ROUTE}`}/>
  }

  return (
    <>
      {children}
    </>
  )
}