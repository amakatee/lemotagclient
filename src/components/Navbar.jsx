import React, {useState} from 'react'
import ShoppingNavCart from './ShoppingNavCart'
import {CiUser} from 'react-icons/ci'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../features/users/usersApiSlice'

const Navbar = () => {
  const [shoppingCart , setShoppingCart] = useState(false)
  const [sideBar, setSideBar] = useState(false)
  const navigate = useNavigate()
  const {username} = useParams()
 
  const s = "fff"

  
  const users  = useSelector(selectAllUsers)
  const user = users?.find(user => user.username === username)
  console.log(user)

  return (
    <>
    <nav className='nabvar__content'>
        <div className='burger__menu' onClick={() => setSideBar(true)} >
            <span ></span>
            <span ></span>
            
        </div>

        {user ? 
          <h1 onClick={() => navigate('/')} id='logo' className='custom-font'>{user.username}</h1>  :

          <h1 onClick={() => navigate('/')} id='logo' className='custom-font'>И́ней</h1> 
        }
    
        
     
          
        
         <div className='nav__right'>
         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15.36,9.38a6,6,0,1,1-6-6A6,6,0,0,1,15.36,9.38Z" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path><line x1="13.61" y1="13.61" x2="20.6" y2="20.6" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"></line></svg>
         <svg onClick={() => navigate('/auth')} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15.78,7.09A3.78,3.78,0,1,1,12,3.31,3.78,3.78,0,0,1,15.78,7.09Z" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="round"></path><path d="M20.31,20.69a8.31,8.31,0,1,0-16.62,0" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="round"></path></svg>
    
        <div className='shopping__bag'  onClick={() =>setShoppingCart(true) }>
            <svg id="bag" class="icon-bag" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="currentColor" stroke-miterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="currentColor" stroke-miterlimit="10" vector-effect="non-scaling-stroke"></path></svg>
            <span className='sb__text'>(13)</span>
        </div>
        </div>        
       
             
    </nav>
     
  {  shoppingCart && 
    <ShoppingNavCart  setShoppingCart={setShoppingCart}/>
  }

  { sideBar &&
    <Sidebar setSideBar={setSideBar} />
  }
   
    </>
    
  )
}

export default Navbar