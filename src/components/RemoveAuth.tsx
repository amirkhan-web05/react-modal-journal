import { Button } from '@mui/material'
import { deleteUser, getAuth } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setRemove } from '../redux/actions/auth'
import { AUTH_ROUTE } from '../utils'

export const RemoveAuth:React.FC = () => {
  const dispatch = useDispatch()

  const removeUser = () => {
    // const auth = getAuth();
    // const user:any = auth.currentUser;

    // deleteUser(user).then(() => {
    //   dispatch(setRemove())
    // })
  }

  return (
    <div className='remove'>
      {/* <Button onClick={removeUser} variant="contained">
        <Link style={{textDecoration:'none', color:'#fff'}} to={`${AUTH_ROUTE}`}>
          Delete Account
        </Link>
      </Button> */}
    </div>
  )
}