import React from 'react'
import {BsPlus} from 'react-icons/bs'
const ProductFilter = () => {
  return (
    <div className='products__cont-filter'>
        <div className='pc__filter'>
            <h4>Filters </h4>
            <div className='pc_icon'>
              <BsPlus  size={20} />
            </div>
           
        </div>
                       
    </div>
  )
}

export default ProductFilter