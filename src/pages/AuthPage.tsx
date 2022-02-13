import { Typography, Button, Input, FormHelperText } from '@mui/material'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TypeFormData } from '../types';
import { setData } from '../redux/actions/users';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { REGISTER_ROUTE } from '../utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypeSelector';

const schema = yup.object({
  email:yup.string().email('Invalid email format').required(),
  password:yup.string().min(8, 'Password must contain at least 8 characters').required()
})

export const AuthPage:React.FC = () => {
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate()
  const {email, password} = useTypedSelector<TypeFormData>(state => state.login)
  
  const { register, handleSubmit, formState:{errors} } = useForm<TypeFormData>({
    defaultValues: {
      email:email,
      password:password
    },
    mode:'onBlur',
    resolver:yupResolver(schema)
  });
  
  const onSubmit:SubmitHandler<TypeFormData> = ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setData({
        email:user.email,
        id:user.uid,
        token:user.tenantId
      }))
      navigate('/')
    })
    .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <Typography className='form__title' variant='h3'>
        Auth
      </Typography>
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
        <Button style={{marginTop:10}} type="submit" variant='contained'>Auth</Button>
          &nbsp;Need an account?&nbsp;
        <Link to={`${REGISTER_ROUTE}`}>Register</Link>
      </div>
    </form>
  )
}