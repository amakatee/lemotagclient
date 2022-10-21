import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CustomInput from '../../components/forms/CustomInput'
import { useParams } from 'react-router-dom'
import { useUpdateProductMutation , useDeleteProductMutation, selectProductById} from './productsApiSlice'
import { selectUserById } from '../users/usersApiSlice'

     const EditProductForm = ({product}) => { 
     
        const [updateProduct, {
        isLoading,
        isSuccess,
        isError,
        error

     }] = useUpdateProductMutation()

     const user = useSelector(state => selectUserById(state, product.user))
     

     const [deleteProduct, {
        isSuccess: isDeletingSuccess,
        isError: isDeletingError,
        error: delerror
        }] = useDeleteProductMutation()
    const navigate = useNavigate()
   

   


    const [title, setTitle] = useState(product.title )
    const [price, setPrice] = useState(product.price)
    const [text, setText] = useState(product.text )
 
    const [image, setImage] = useState(product.image)

    console.log(product.types)


    // const inputArr = [
    //     { 
    //       color: product.types.color,
    //       size:product.types.size
    //     },
        
    //   ]
    
      const [types, setTypes] = useState(product.types)
    
    const onTitleChanged = e => setTitle(e.target.value)
    const onTextChanged = e => setText(e.target.value)
    const onPriceChanged = e => setPrice(e.target.value)

    const onSaveProductClicked = async (e) => {
      await updateProduct({id: product.id, title, text, image, price, types})
      navigate(`/shop/${user.username}`)
    }

    const onDeleteProductClicked = async (e) => {
        e.preventDefault()
        console.log('delete')
      
            await deleteProduct({ id: product.id})
            navigate(`/shop/${user.username}`)

      

    }

    const handleImage = (e) => {
      const file = e.target.files[0]
      setFileToBase(file)
      console.log(file)
  }

  const setFileToBase = (file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
          setImage( reader.result)
      }
  }
    


  /*  refactor later*/

  const addInput = () => {
    setTypes(t => {
      return [
        ...t,{
         
           color,
           size
        }
      ]
    })
  }

  const removeType = index => {
    const list = [...types]
    list.splice(index,1)
    setTypes(list)
  }

  const handleInputChange = (e, index) => {
    

    const {name, value} = e.target
    console.log(name, value)
    const list = [...types]
    list[index][name] = value
    setTypes(list)
   
  }
  
/* refactor emds  */


     const content = <>

   { product &&
     <form className='newproduct__form' onSubmit={e => e.preventDefault()}>
     <div className='form__title'>
            <div className='form__title'>
             <h2>Change Product</h2>
           </div>
           <div className='newform-inputs'>
           <CustomInput
                    labelText="Title"
                    htmlFor='title'
                    className={`form__input `}
                     id="title"
                    name="title"
                    type="text"
                    autoComplete='off'
                    value={title}
                    onChange={onTitleChanged}
                   />
                 <CustomInput
                    labelText="Text"
                    htmlFor='text'
                    className={`form__input `}
                    id="text"
                    name="text"
                    type="text"
                    autoComplete='off'
                    value={text}
                    onChange={onTextChanged}
                   />   
                   <CustomInput
                    labelText="Price"
                    htmlFor='price'
                    className={`form__input `}
                    id="price"
                    name="price"
                   type="price"
                   autoComplete='off'
                   value={price}
                   onChange={onPriceChanged}
               
                   />  
                   <div className='newform__image'>
                       <input className='image-btn' onChange={handleImage} accept="image/*"  type="file" id="formupload" name="image"/>
                      <img src={image} alt='' />
                   </div> 

           </div>
           <div className='form__size-color'>
           
           <div className='newform__sc-add'>
           <h2>color:</h2>
           <div><h2>size:</h2></div>
           <div></div>

        </div>
           
            <div className='form__sc'>
            {  product.types.map((t, index) => {
                   return (
                      <>
                       <input
                       className='sc-input'
                        type="text"
                        name="color"
                        placeholder='blue'
                        value={t.color}
                        onChange={e => handleInputChange(e, index)}
                     />
                      <input
                     
                       className='sc-input'
                       name="size"
                       value={t.size}
                       placeholder='xs, s, m'
                       onChange={e => handleInputChange(e, index)}
                     />
                     <div className='sc-buttons'>
                       <div onClick={(e,index) => removeType(index)} >-</div>
                       <div onClick={addInput} >+</div>
                     </div>
                      
                       
                     </>
                      )
              })}
             
            </div>
           </div>
            <div className='form__action-editbtn'>
                    <button
                    title='save'
                    className='form__actionblack-btn' 
                    onClick={onSaveProductClicked}
                     >
                        Save
                 </button>
                  <button
                    title='Delete'
                    className='form__actionwhite-btn' 
                    onClick={onDeleteProductClicked}
                   >
                        Delete
                   </button>
                </div>

                
                
            </div>
     </form>
    }
      </>
     
          
     return content
     
}
 

export default EditProductForm