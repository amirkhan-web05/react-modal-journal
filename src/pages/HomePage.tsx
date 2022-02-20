import React from 'react'
import { Sidebar } from '../components/SideBar'
import { UsersLists } from '../components/UsersLists'
import { TypeUsers } from '../types'
import { RemoveAuth } from '../components/RemoveAuth'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { getAuth, User } from 'firebase/auth'
import { fetchUsers } from '../redux/actions/users'
import { useAppDispatch } from '../hooks/useTypeDispatch'
import { setGoogle } from '../redux/actions/auth'

export const HomePage:React.FC = () => {
  const dispatch = useAppDispatch()
  const users = useTypedSelector<TypeUsers[]>(state => state.users.users)
  const auth = useTypedSelector<User | null>(state => state.auth.user)

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  console.log(auth)
  
  return (
    <>
      <Sidebar/>
      <UsersLists users={users}/>
      <h1 style={{textAlign:'center'}}>{auth?.email}</h1>
      <RemoveAuth/>
    </>
  )
}