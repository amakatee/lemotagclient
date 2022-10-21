import React from 'react'
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Sidebar = ({setSideBar}) => {
  return (
    <div className='sidebar' >
        <GrClose size={27}  className='sidebar__close' onClick={() => setSideBar(false)} />
        <div className='sidebar__cont'> 
       <Link to='/products'><h1>Все товары</h1></Link> 
        <h1>Доставка и возврат</h1>
        </div>
        
    </div>
  )
}

export default Sidebar