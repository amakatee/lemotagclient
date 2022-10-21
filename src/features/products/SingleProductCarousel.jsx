import React from 'react'

const SingleProductCarousel = ({product}) => {
    console.log(product)
  return (
    
    <div className='carousel-cont'>
        
        <img  src={product.image}/>
    </div>
  )
}

export default SingleProductCarousel