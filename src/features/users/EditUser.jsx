import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'
import EditUserForm from './EditUserForm'
import { selectAllUsers } from './usersApiSlice'

const EditUser = () => {
  const {username} = useParams()
  const users = useSelector(selectAllUsers)

  const user1 = useSelector(state => selectUserById(state, username))
  const user = users.find(user => user.username === username)
  const content = user ? <EditUserForm user={user} /> : <p>Loadingjhk</p>

  return content
}

export default EditUser