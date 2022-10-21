import React from 'react'
import EditPic from '../../../assets/img/edit.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const UserHeaderTemolate = ({currentUser}) => {
    const navigate = useNavigate()
  return (
    <header className='user__header'>
      <div className='user__image'>
       <img width={100} src={currentUser?.image}></img>
      </div>
      <div className='user__title'>
        <h4 className='user__title-text'>{currentUser?.username}</h4>
        <img onClick={() => navigate(`edituser`)} width={'15px'} src={EditPic}></img>
      </div>
     
       <div className='user__description'>some text description</div>
    
    </header>
  )
}

export default UserHeaderTemolate