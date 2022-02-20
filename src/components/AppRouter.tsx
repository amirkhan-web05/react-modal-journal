import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { RequirePath } from '../hoc/RequirePath'
import {authRoutes, publicRoutes} from '../routes/index'

export const AppRouter:React.FC = ():JSX.Element => { 
  return (
    <Routes>
      {authRoutes.map(({path, Element}) => (
        <Route key={path} path={path} element={
          <RequirePath>
            <Element/>
          </RequirePath>
        }/>
      ))}

      {publicRoutes.map(({path, Element}) => (
        <Route key={path} path={path} element={
            <Element/>
        }/>
      ))}
    </Routes>
  )
}