import { Typography, Button, Input, FormHelperText } from '@mui/material'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TypeFormData } from '../types';
import { Link } from 'react-router-dom';
import { AUTH_ROUTE } from '../utils';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google-svgrepo-com.svg'
import { useTypedSelector } from '../hooks/useTypeSelector';
import { setGoogle, setRegister } from '../redux/actions/auth';
import { useAppDispatch } from '../hooks/useTypeDispatch';
import { User } from 'firebase/auth';

const schema = yup.object({
  email:yup.string().email('Invalid email format').required(),
  password:yup.string().min(8, 'Password must contain at least 8 characters').required()
})

export const RegiserPage:React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {email, password} = useTypedSelector<TypeFormData>(state => state.login)
  const auth = useTypedSelector<User | null>(state => state.auth.user)
  const error = useTypedSelector<string>(state => state.auth.error)
  
  const { register, handleSubmit, formState:{errors} } = useForm<TypeFormData>({
    defaultValues: {
      email:email,
      password:password
    },
    mode:'onBlur',
    resolver:yupResolver(schema)
  });

  React.useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [auth])

  const onSubmit:SubmitHandler<TypeFormData> = ({email, password}:TypeFormData) => {
    dispatch(setRegister(email, password))
  }
  
  const googleLogin = () => {
    dispatch(setGoogle())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <Typography className='form__title' variant='h3'>
        Register
      </Typography>
      <FormHelperText sx={{textAlign:'center', fontSize:18}}>{error}</FormHelperText>
      <Input
        id='email'
        type='email'
        {...register('email')}
        sx={{width:400}}
        className='form-input'
        placeholder='Email'
      />
      {errors.email && <FormHelperText>Invalid email format</FormHelperText>}
      <Input
        id='password'
        type='password'
        {...register('password')}
        sx={{width:400}}
        className='form-input'
        placeholder="Password"
      />
      {errors.password && <FormHelperText>Password must contain at least 8 characters</FormHelperText>}
      <div style={{display:'flex', alignItems:'center'}}>
        <Button style={{marginTop:10}} type="submit" variant='contained'>Register</Button>
          &nbsp;Already have an account?&nbsp;
        <Link to={`${AUTH_ROUTE}`}>Auth</Link>
      </div>
      <img 
        className='google-icon'
        src={googleIcon} 
        alt='Google' 
        style={{marginTop:'15px'}} 
        onClick={googleLogin}
      />
    </form>
  )
}