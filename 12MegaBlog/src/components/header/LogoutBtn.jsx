import React from 'react'
import{useDispatch} from'react-redux'
import authService from '../../appwrite/auth' 
import { logOut } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch=useDispatch()
 

  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn