import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { setAuth } from '../redux/actions/auth'
import { setData } from '../redux/actions/users'
import { AUTH_ROUTE } from '../utils'

export const RequirePath: React.FC = ({ children }): JSX.Element => {
  const dispatch = useDispatch()
  const auth = getAuth()

  React.useEffect(() => {
    onAuthStateChanged(auth, (user:any) => {
      if (user) {
        dispatch(setData(user))
      }
    })
  })

  return (
    <>
      {children}
    </>
  )
}