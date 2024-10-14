import React,{useEffect,useState} from 'react'
import { Container,PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
  const [Posts,setPosts]=useState(null)
  const {}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{
    if(slug){
      appwriteService.getPost(slug).then((post)=>{
        if(post){
          setPosts(post)
        }

      })
    }else{
      navigate('/')
    }
  },[slug,navigate])

  return Posts?(
    <div className='py-8'>
      <Container>
        <PostForm Posts={Posts}/>
      </Container>
    </div>
  ):null
}

export default EditPost