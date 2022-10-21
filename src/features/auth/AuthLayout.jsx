import React, {useState} from 'react'
import Login from './Login'
import Registration from './Registration'
import { Link, Outlet, useParams } from 'react-router-dom'

const AuthLayout = () => {
  const link = '/auth'


  const params = useParams()
  console.log(params)
  
  

  return (
    <div className='auth__cont'>
      <div className='auth-box'>
      <div className='auth__nav'>
            <Link to='/auth'><h1 className='auth__title'> Login</h1></Link>
            <Link to='/auth/registration'><h1 className={ 'auth__title '} >Registration</h1></Link>
         </div>
        <div className='auth-form'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout