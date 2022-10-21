import React, {useState, useRef} from 'react'
import { useAddNewProductMutation } from './productsApiSlice'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { selectAllUsers } from '../users/usersApiSlice'
import { useSelector } from 'react-redux'
import CustomInput from '../../components/forms/CustomInput'
import CustomButton from '../../components/CustomButton'

const NewProductForm = () => {
  const users = useSelector(selectAllUsers)


  const [addNewProduct, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useAddNewProductMutation()

  const navigate = useNavigate()
  const {username} = useParams()
  const user = users.find(user => user.username === username)
  

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [text, setText] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState([])

  const inputArr = [
    { 
      color:'',
      size:[]
    },
    
  ]

  const [types, setTypes] = useState(inputArr)
  const [image, setImage] = useState('')


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
    if(types.length <= 1) return 
    const list = [...types]
    list.splice(index,1)
    setTypes(list)
  }

  const handleInputChange = (e, index) => {
    e.preventDefault()
    const {name, value} = e.target
    console.log(name, value)
    const list = [...types]
    list[index][name] = value
    setTypes(list)
   
  }

  const onTitleChanged = e => setTitle(e.target.value)
  const onPriceChanged = e => setPrice(e.target.value)
  const onTextChanged = e => setText(e.target.value)
  


  const onSaveProductClicked = async(e) => {
    e.preventDefault()
       try {
        await addNewProduct({user, title, price, text, image, types})
      
         if(isSuccess) {
          navigate(`/shop/${user.username}`)
         }
      

       } catch (err) {
         console.log(err)

       }
        
  
}
  




  const handleImage = (e) => {
    const file = e.target.files[0]
    setFileToBase(file)

}

  const setFileToBase = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        setImage( reader.result)
    }
} 


const onSelectFile = async (e) => {
  const file = e.target.files[0]
  const convertedFile = await convertToBase64(file)
}

const convertToBase64 = (file ) => {
  return new Promise(resolve => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => {
      resolve(reader.result)
    }
  })

}



 
 

const content = 
     <>
        <p>{error?.data.message}</p>
        <form className='newproduct__form' onSubmit={onSaveProductClicked} >
           <div className='form__title'>
             <h2>Create Product</h2>
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
                    labelText="Descripton"
                    htmlFor='text'
                    className={`form__input `}
                    id="text"
                    name="text"
                    type="text"
                    value={text}
                    onChange={onTextChanged}
                    />     

             <CustomInput 
                    labelText="Price"
                    htmlFor='price'
                    className={`form__input `}
                    id="price"
                    name="price"
                    type="number"
                    value={price}
                    onChange={onPriceChanged}
                    />              

            
             <div className='newform__image'>
                <input className='image-btn' onChange={handleImage} accept="image/*"  type="file" id="formupload" name="image"/>
                <img src={image} alt='' />
             </div> 
             </div>  

         <div className='form__size-color'>
           {types.length !== 0 &&
           <div className='newform__sc-add'>
           <h2>color:</h2>
           <div><h2>size:</h2></div>
           <div></div>

        </div>
           }
            <div className='form__sc'>
            {  types.map((t, index) => {
                   return (
                      <>
                       <input
                       className='sc-input'
                        type="text"
                        name="color"
                        placeholder='blue'
                        onChange={e => handleInputChange(e, index)}
                     />
                      <input
                       className='sc-input'
                       name="size"
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
            <button className='form__action-btn' title="save" >save</button>
        
        </form>
     </>


  return content
}

export default NewProductForm