import axios from 'axios'
import React from 'react'
import { Sidebar } from '../components/SideBar'
import { UsersLists } from '../components/UsersLists'
import { TypeUsers } from '../types'
import { RemoveAuth } from '../components/RemoveAuth'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { User } from 'firebase/auth'

export const HomePage:React.FC = () => {
  const [users, setUsers] = React.useState<TypeUsers[]>([])
  const auth = useTypedSelector<any>((state) => state.users.data)  
  

  const fetchUsers = () => {
    try {
      axios.get<TypeUsers[]>('https://jsonplaceholder.typicode.com/users?_limit=3').then(({data}) => {
        setUsers(data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])
  
  return (
    <>
      <Sidebar/>
      <UsersLists users={users}/>
      <h1 style={{textAlign:'center'}}>{auth?.email}</h1>
      <RemoveAuth/>
    </>
  )
}