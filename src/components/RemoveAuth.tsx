import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { setRemove } from '../redux/actions/auth'
import { AUTH_ROUTE } from '../utils'
import { useAppDispatch } from '../hooks/useTypeDispatch'
import { deleteUser } from 'firebase/auth'

export const RemoveAuth:React.FC = () => {
  const dispatch = useAppDispatch()
  const auth = useTypedSelector<any>(state => state.auth.user)
  
  const removeUser = () => {
    deleteUser((auth)).then(() => {
      dispatch(setRemove())
    })
  }

  return (
    <div className='remove'>
      {auth && <Button onClick={removeUser} variant="contained">
          <Link style={{color:'#fff'}} to={`${AUTH_ROUTE}`}>
            Delete Account
          </Link>        
      </Button>}
    </div>
  )
}