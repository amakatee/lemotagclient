import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersApiSlice'
import { selectAllProdcuts, selectProductById } from '../products/productsApiSlice'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar  from '../../components/Navbar'
import {MdLibraryAdd} from 'react-icons/md'

import ProdcuctIconTemplate from '../../components/ProdcuctIconTemplate'
import UserHeaderTemolate from './user/UserHeaderTemolate'





const UserPage = () => {
    const {username} = useParams()

    const navigate = useNavigate()

    const users = useSelector(selectAllUsers)
    const products = useSelector(selectAllProdcuts)
   
    const currentUser = users?.find(user => user.username === username)
    if(!currentUser) return
    const userProducts = products?.filter(p => p.user === currentUser.id)
  
  
    return (
     <>
     
      <Navbar  />
      
    
     <section className='user__section'>
       {currentUser && 
       <UserHeaderTemolate currentUser={currentUser} />
      }
      <div className='user__add-product'>
       <div onClick={() => navigate(`/shop/${currentUser.username}/newproduct`)} className='add-icon'> <MdLibraryAdd size={18} /> </div>

      </div>

     <main className='products__cont'>
       {userProducts.length < 1 ? <div>No items yet</div> : 
        userProducts?.map(product => (
         <div key={product.id} onClick={() => navigate(`/products/${currentUser.username}/${product.id}`)}>
          <ProdcuctIconTemplate  product={product} user={currentUser}/>
          </div>
        ))}
     </main>
    
     </section>
    
     </>
      
    )
}

export default UserPage