import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { logIn as authLogin } from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'

function Login() {
  return (
    <div>Login</div>
  )
}

export default Login