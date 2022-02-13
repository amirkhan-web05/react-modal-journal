import { Button } from '@mui/material'
import React from 'react'
import { TypeButton } from '../types'

export const Buttons:React.FC<TypeButton> = ({btn, onClickButton}):JSX.Element => {
  return (
    <Button
      onClick={() => onClickButton(btn.id)}
      variant="contained" 
      className='btn__modal'
    >
      {btn.name}
    </Button>
  )
}