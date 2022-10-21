import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EditPic from '../assets/img/edit.png'
import { selectProductById } from '../features/products/productsApiSlice'
import { selectUserById } from '../features/users/usersApiSlice'


const SingleProductDesc = ({product}) => {
  const user = useSelector( state =>  selectUserById(state, product.user))
  console.log(user)
  
 

  const navigate = useNavigate()
  console.log(navigate)
    
    const [colorVal, setColorVal] = useState({
      index: 0,
      color:''
    })
    const [sizeVal, setSizeVal] = useState()
    
    const makeArr = (str) => {
        let newArr
        newArr = str.split(',') 
        return newArr
    }



    const handleColor = (color, index) => {
      setColorVal({index,color})
      
    }



  return (
    <>
  
        <div className='single__prod-title'>
             <div>
               <h4> {product.title} { } 
                 <img onClick={() => navigate(`/products/${product?.id}/editproduct`)} width={15} src={EditPic} />
               </h4>
               { user && 
                 <p onClick={() => navigate(`/shop/${user?.username}`)} className='creator-name'>{user?.username}</p>
                }
             </div>
             <p>₽ {product.price}</p>
             </div>
         
          <div className='single__prod-text'>
              <p>{product.text}</p>
          </div>

          <div className='single__prod-sizecolor'>
             <div className='single__prod-color'>
                    <h3 className='title-base'>color: {colorVal.color} </h3>
                    <div className='color__span-cont'>
                        {product?.types?.map((type, i) => (
                           <span className={type.color === colorVal.color ? 'color-span active' : 'color-span '} onClick={() => handleColor(type.color, i )}>
                               <h4> {type.color}</h4>
                           </span>
                      ))} 
                    </div>
              </div>
              <div className='single__prod-size'>
                    <h3  className='title-base'>size:{sizeVal}</h3>
                    <div className='size__span-cont'>
                       {product?.types?.map((type,i) => (
                         colorVal.index === i ? type.size && makeArr(type.size).map(s => 
                                <span className={`${s === sizeVal ? 'size-span active' : 'size-span'}` }onClick={() => setSizeVal(s)}>
                                  <h4>{s}</h4>
                                </span>) : null
                      ))} 
                  </div>
                  

              </div>
          </div>

          <div className='single__prod-btn'>
            <button className='add-tc-btn'>Add to Cart</button>
          </div>

    </>
  )
}

export default SingleProductDesc