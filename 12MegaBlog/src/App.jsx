
import React,{ useState ,useEffect} from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import {logIn, logOut } from './store/authSlice';
import {Header,Footer} from './components/index.js'
import  {Outlet}  from 'react-router-dom'





function App() {
 const [loading,setLoading]=useState(true);
const dispatch=useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(logIn({userData}))
    }else{
      dispatch(logOut())
    }

  })
  .finally(()=> setLoading(false))

},[])

 return !loading?(<div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
  <div className='w-full block'>
    <Header/>
    <main>
     TODO:     <Outlet/>
    </main>

    <Footer/>
  </div>

 </div>

 ): (null)
}

export default App
