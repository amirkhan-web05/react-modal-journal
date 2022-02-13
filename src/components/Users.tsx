import * as React from 'react'
import { TypeTask, TypeUsers } from '../types'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { FormControl, OutlinedInput, Typography } from '@mui/material'
import axios from 'axios'
import { TaskList } from './TaskList'
import { Link } from 'react-router-dom'
import { DETAILS_ROUTE } from '../utils'

const box = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 14,
  borderRadius:5,
  zIndex:100,
  pt: 2,
  px: 4,
  pb: 3,
};

export const Users:React.FC<TypeUsers> = ({id, name, popup, onClickUsers, hideModal}):JSX.Element => {
  const [task, setTask] = React.useState<TypeTask[]>([])
  const [value, setValue] = React.useState<string>('')

  const addToTitle = async () => {
    try {
      if (value.trim()) {

        if (value.length) {
          alert(`${name}:Task add`)
        }

        await axios.post('https://jsonplaceholder.typicode.com/users', task).then(() => {
          setTask(prev => [...prev, {
            id:Date.now(),
            title:value
          }])
        })
      }

      setValue('')
    } catch (error) {
      console.log('Error:', error)
    }
  }

  const removeItem = async (id:number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
        setTask(prev => prev.filter(item => item.id !== id))
      })
    } catch(error) {
      console.log('Error', error)
    }
  }

  const handlerChangeValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  
  return (
    <>
      {popup === id ? (
        <Box sx={{...box, width:630, height:230}}>
          <div>
            <div>
              <Typography variant='h4'>
                <Link to={`${DETAILS_ROUTE}/${id}`} style={{color:'#000'}}>
                  {name}
                </Link>
              </Typography>
              <Button 
                variant='contained' 
                className='modal__close' 
                onClick={hideModal} 
                type='button'>
                  Close
              </Button>
            </div>
            <FormControl>
                <OutlinedInput
                  sx={{width:'27ch'}}
                  value={value}
                  onChange={handlerChangeValue} 
                  className='modal__input' 
                  type="text" 
                  placeholder={`${name}`} 
                />
            </FormControl>
            <Button 
              sx={{width:'25ch', margin:'0 15px'}}
              variant='contained' 
              onClick={addToTitle} 
              className='modal__add'
              >
                Add
            </Button>
          </div>
        </Box>
      ) : ''}
      <div style={{marginTop:'1em'}}>
        <TaskList
          id={id} 
          name={name}
          popup={popup} 
          task={task} 
          removeItem={removeItem}
        />
      </div>
   </>
  )
}