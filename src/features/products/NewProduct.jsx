import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewProductForm from './NewProductForm'

const NewProduct = () => {

  const users = useSelector(selectAllUsers)
  if(!users?.length) return <p>Not currently availble</p>
  const content = <NewProductForm users={users} /> 
  return content
}

export default NewProduct