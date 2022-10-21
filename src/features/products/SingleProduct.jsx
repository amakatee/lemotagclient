import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectProductById } from './productsApiSlice'
import { useParams } from 'react-router-dom'
import { selectUserById } from '../users/usersApiSlice'
import SingleProductTemplate from '../../components/SingleProductTemplate'
import SingleProdNav from '../../components/SingleProdNav'


const SingleProduct = () => {
    const {id} =  useParams()

 
    
     const product = useSelector(state => selectProductById(state, id ))
     console.log(id)
   
   
  return (
    <>
     <SingleProdNav />
     {product &&
      <SingleProductTemplate  product={product} />
    
    }
    </> 
  )
}

export default SingleProduct