import React from 'react'
import { useSelector } from 'react-redux'
import { selectUserById } from '../features/users/usersApiSlice'
import SingleProductCarousel from '../features/products/SingleProductCarousel'
import SingleProductDesc from './SingleProductDesc'
import { useParams } from 'react-router-dom'

const SingleProductTemplate = ({product}) => {
  // const {username} = useParams()
  // const user = useSelector(state => selectUserById(state, product.user))
  // console.log(params)
  return (
    <div className='single__product-cont'>
        <div className='single__prod-carousel'>
          <SingleProductCarousel product={product} />
        </div>
        <div className='single__prod-desc'> 
        {product  && <SingleProductDesc product={product}   /> } 
        </div>
    </div>
  )
}

export default SingleProductTemplate