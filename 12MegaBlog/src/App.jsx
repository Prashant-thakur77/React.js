
import React,{ useState ,useEffect} from 'react'
import './App.css'
import useDispatch from 'react-redux'
import AuthService from './appwrite/auth';
import {logIn, logOut } from './store/authSlice';




function App() {
 const [loading,setLoading]=useState(true);
const dispatch=useDispatch()

useEffect(()=>{
  AuthService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(logIn({userData}))
    }else{
      dispatch(logOut())
    }

  })
  .finally(()=> setLoading(false))

},[])

 return !loading?(<div className='min-h-sc'></div>

 ): (null)
}

export default App
