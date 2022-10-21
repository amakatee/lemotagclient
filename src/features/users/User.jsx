import React, {useState} from 'react'

import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'
import { useParams, Link } from 'react-router-dom'


const User = ({userId}) => {
   const {username} = useParams()

  
    const user = useSelector(state => selectUserById(state, userId))
  
     
    //  user?.username === username ? setCurrentUSer(user) :  null



  return (
    <div><Link to={`${user.username}`}>{user.username}</Link></div>
  )
}

export default User