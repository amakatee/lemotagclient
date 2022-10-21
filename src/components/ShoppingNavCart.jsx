import React from 'react'
import {GrClose} from 'react-icons/gr'

const ShoppingNavCart = ({setShoppingCart}) => {

  return (
     <div className='nav__shopping-cart' >
         <div className='desk__cont'>
           <div className='sc__header ' >
               <GrClose className='pointer' size={15} onClick={() => setShoppingCart(false)} />
              <h1 className='nav__in-bag-text'>В корзине</h1>
            <div className='nav__svg-cont'>
        <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82"
         fill="none" stroke="#434343" strokeMiterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#434343" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
        <span className='nav__shop-total'>(13)</span>
            </div>
    </div>
    {0 < 1 ?  <div className='empty__text mini__products-cont'>В корзине пусто :(</div> :
     <div className=' mini__proucts-cont'>
     {/* { cartItems.map(cart =>  <ShoppingCartItem cart={cart} />)} */}
    

  </div>
    }
   


    </div>
    <div className='total__mini '>
        <div className='subtotal__mini'>
            <p >Суммарно</p>
            <p>P 50</p>
        </div>
        <div className='grid content-center'>
     <button  className='checkout__btn'>
                Перейти к оплате
     </button>
       
        </div>
    </div>

    </div>
  )
}

export default ShoppingNavCart