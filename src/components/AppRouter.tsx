import { getAuth } from 'firebase/auth'
import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { RequirePath } from '../hoc/RequirePath'
import { useTypedSelector } from '../hooks/useTypeSelector'
import {authRoutes, publicRoutes} from '../routes/index'
import { AUTH_ROUTE } from '../utils'

export const AppRouter:React.FC = ():JSX.Element => {   
  const auth = getAuth()

  console.log(auth)

  return (
    <Routes>
      {authRoutes.map(({path, Element}) => (
        <Route key={path} path={path} element={
          <RequirePath>
            {auth ? <Element/> : <Navigate to={`${AUTH_ROUTE}`}/>}
          </RequirePath>
        }    
        /> 
      ))}

      {publicRoutes.map(({path, Element}) => (
        <Route key={path} path={path} element={<Element/>}/>
      ))}
    </Routes>
  )
}