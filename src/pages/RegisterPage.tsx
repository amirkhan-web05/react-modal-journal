import { Typography, Button, Input, FormHelperText } from '@mui/material'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TypeFormData } from '../types';
import { setData } from '../redux/actions/users';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AUTH_ROUTE } from '../utils';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../assets/google-svgrepo-com.svg'
import { useTypedSelector } from '../hooks/useTypeSelector';

const schema = yup.object({
  email:yup.string().email('Invalid email format').required(),
  password:yup.string().min(8, 'Password must contain at least 8 characters').required()
})

export const RegiserPage:React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()

  const auth = getAuth()
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
    const auth = getAuth();
    
    createUserWithEmailAndPassword(auth, email, password)
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

  
  const googleLogin = () => {
    signInWithPopup(auth, provider)
    .then((result:any) => {
      console.log(result);
      navigate('/')
    }).catch((error) => {
      console.error('Error:', error)
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <Typography className='form__title' variant='h3'>
        Register
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