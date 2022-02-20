import React from 'react'
import { TypeUsersList } from '../types'
import { Buttons } from './Buttons'
import { Users } from './Users'

export const UsersLists:React.FC<TypeUsersList> = ({users}):JSX.Element => {
  const [popup, setPopup] = React.useState<number | boolean>(0)
  const changeHandler = (value:number):void => {
    setPopup(value)
  }

  const closeModals = ():void => {
    setPopup(false)
  }

  return (
    <>
      <div className='btn'>
        {users.map(btn => (
          <Buttons key={btn.id} onClickButton={changeHandler} btn={btn}/>
        ))}
      </div>
      <div className='users'>
        {users.map(item => (
          <Users 
            key={item.id} 
            {...item} 
            popup={popup}
            onClickUsers={changeHandler}
            hideModal={closeModals}
          />
        ))}
      </div>
    </>
  )
}