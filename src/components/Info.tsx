import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { TypeUsers } from '../types'
import { Messages } from './Messages'

export const Info:React.FC<TypeUsers> = ({address, setModal, modal}):JSX.Element => {      
  return (
    <>
      <Button onClick={setModal} className='info__btn' type='button' variant='contained'>Message</Button>
      <Button className='info__btn info__btn-1' type='button' variant='contained'>Follow</Button>
      <Box>
        <Typography variant='h5'>City: {address.city}</Typography>
        <Typography variant='h5'>Suite: {address.suite}</Typography>
        <Typography variant='h5'>Zipcode: {address.zipcode}</Typography>
        <Typography variant='h5'>City: {address.street}</Typography>
      </Box>
      {modal ? <Messages onClose={setModal}/> : ''}
    </>
  )
}