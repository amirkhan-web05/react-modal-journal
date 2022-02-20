import React from 'react'
import { FormControl, Typography, OutlinedInput, Button } from '@mui/material';
import { Box } from '@mui/system';

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


type TypeCloseModal = {
  onClose:() => void;
}

export const Messages:React.FC<TypeCloseModal> = ({onClose}):JSX.Element => {
  const [value, setValue] = React.useState<string>('')  
  const sendMessage = ():void => {
    console.log(value)
  }

  return (
    <div className='modal'>
      <Box sx={{...box, width:630, height:230}}>
        <div style={{padding:'26px 15px'}} className='modal__inner'>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography variant='h4'>Messages</Typography>
            <span style={{fontSize:'22px', cursor:'pointer'}} onClick={onClose}>&times;</span>
          </div>
          <FormControl sx={{ width: '55ch', marginTop:'11em'}}>
            <OutlinedInput value={value} onChange={e => setValue(e.target.value)} placeholder="Please enter text" />
            <Button sx={{marginTop:1}} variant="outlined" onClick={sendMessage}>Отправить</Button>
          </FormControl>
        </div>
      </Box>
    </div>
  )
}