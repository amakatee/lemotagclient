import React from 'react'
import {IoIosArrowRoundBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const SingleProdNav = () => {
    const navigate = useNavigate()
  return (
      <div>
          <div className='s__prod-nav'>
          <div className='' onClick={() => navigate(-1)}>
              <IoIosArrowRoundBack color='#434343' size={30}  />
            </div>
          <div className='sprod__nav-sc' >
              <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#434343" strokeMiterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#434343" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
              <span className='mob__nav-span'>(10)</span>
           </div>
      
     </div>
      </div>
    
  )
}

export default SingleProdNav