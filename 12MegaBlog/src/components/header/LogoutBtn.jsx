import React from 'react'
import{useDispatch} from'react-redux'
import authService from '../../appwrite/auth' 
import { logOut } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch=useDispatch()
  const logoutHandler=(()=>{
    authService.logout().then(()=>{
      dispatch(logOut())
    })

  })

  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn