import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserById } from '../features/users/usersApiSlice'

const ProdcuctIconTemplate = ({product}) => {

    const navigate = useNavigate()
   
  return (
    
    <>
    {product && 
     <div className='product__cont-mini'>
        <div className='product__mini-img'>
            <img width={200} src={product.image} />
        </div>
         <div className='product__mini-desc'>
         {/* {user && <h5 onClick={() => navigate(`/shop/${user?.username}`)} className='product__mini-user'>{user.username}</h5>} */}
            <h4 className='product__mini-title'>{product.title}</h4>
            <p>₽  {product?.price}</p>
          </div>

      </div>
    }
    </>
  )
}

export default ProdcuctIconTemplate