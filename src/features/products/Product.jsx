import React from 'react'
import { selectProductById } from './productsApiSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUserById } from '../users/usersApiSlice'
import ProdcuctIconTemplate from '../../components/ProdcuctIconTemplate'

const Product = ({prodId}) => {
    const product = useSelector(state => selectProductById(state, prodId))
    console.log(product)
    

   
  return (
      <> 
      
        <Link to={`${prodId}`}>
         <ProdcuctIconTemplate product={product}   />
       </Link>
 
      
      

 
   
   
    </>
  )
}

export default Product