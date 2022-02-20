import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useParams } from 'react-router-dom'
import { Info } from '../components/Info'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { fetchUsers } from '../redux/actions/users'
import { TypeUsers } from '../types'
import { useAppDispatch } from '../hooks/useTypeDispatch'

export const DetailsPage:React.FC = () => {
  const dispatch = useAppDispatch()
  const {id} = useParams()
  const users = useTypedSelector<TypeUsers[]>(state => state.users.users)
  const details = users.filter((item) => Number(item.id) === Number(id));

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const [modal, setModal] = React.useState<boolean>(false)
  
  const changeHandler = ():void => {
    setModal(!modal)
  }

  return (
    <>
      {details.map((item) => (
        <div className='profile' key={item.id}>
          <div>
            <Box className='profile__photo'>
              200x200
            </Box>
            <Typography className='profile__name' variant='h3'>
              {item.name}
            </Typography>
            <Typography className='profile__phone' variant="subtitle1" component="span">
              Phone: {item.phone}
            </Typography>
            <Typography className='profile__website' component="div">
              Website: {item.website}
            </Typography>
          </div>
          <Box>
            <Info 
              {...item} 
              address={item.address}
              modal={modal}
              setModal={changeHandler}
            />
          </Box>
        </div>
      ))}
    </>
  )
}