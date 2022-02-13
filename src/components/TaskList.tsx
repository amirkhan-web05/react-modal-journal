import React from 'react'
import { TypeTaskList } from '../types';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const commonStyles = {
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '45rem',
  margin:'20px auto',
  padding:'10px',
  height: '5rem',
};


export const TaskList:React.FC<TypeTaskList> = ({task, id, removeItem, popup, name}):JSX.Element => {
  return (
    <>
      {task.map((item, index) => (
        <React.Fragment key={index}>
          {item.title.length ? <Box sx={{...commonStyles, borderRadius:1}}>
            <Typography 
              onClick={() => removeItem(item.id)} 
              variant='h4' 
              className='userlist__title'>
              {`${name} : ${  item.title}`}
            </Typography>
            <Button onClick={() => removeItem(item.id)} variant="outlined">
              Delete
            </Button>
          </Box> : ''}
        </React.Fragment>
      ))}
    </>
  )
}