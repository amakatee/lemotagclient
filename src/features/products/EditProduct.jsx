import React from 'react'
import  {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectProductById} from './productsApiSlice'
import {selectAllUsers } from '../users/usersApiSlice'
import EditProductForm from './EditProductForm'

const EditProduct = () => {
  const {id } = useParams()
  const product = useSelector(state => selectProductById(state, id))
  const users = useSelector(selectAllUsers)


  const content = product && users ? <EditProductForm  product={product} users={users} /> : <p>loading</p>

  return content
}

export default EditProduct