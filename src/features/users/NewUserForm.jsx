import React, {useState, useEffect} from 'react'
import { useAddNewUserMutation } from './usersApiSlice'
import { useNavigate } from 'react-router-dom'
import CustomInput  from '../../components/forms/CustomInput'

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const NewUserForm = () => {

  const [addNewUser, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useAddNewUserMutation()

  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [validUsername, setValidUsername] = useState(false)
  const [password, setPassword] = useState('')
  const [validPassword, setValidPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username))
 }, [username])

 useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
 }, [password])

 useEffect(() => {
  if(isSuccess) {
      setUsername('')
      setPassword('')
      navigate('/auth')
  }

}, [isSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)

    const canSave = [validUsername, validPassword].every(Boolean)&& !isLoading

    const onSaveUserClicked = async(e) => {
      e.preventDefault()
      if(canSave) {
          await addNewUser({username, password, image, email})
      } 
  }
  const content = 
      <>
          <p>{error?.data.message}</p>
          <form className="form" onSubmit={onSaveUserClicked}>
          
                   <CustomInput 
                        labelText="Username:"
                        htmlFor='username'
                        className={`form__input`}
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="off"
                        value={username}
                        onChange={onUsernameChanged}
                    
                   />
                   <CustomInput 
                        labelText="Email:"
                        htmlFor='email'
                        className={`form__input`}
                        id="email"
                        name="email"
                        type="text"
                        autoComplete="off"
                        value={email}
                        onChange={onEmailChanged}
                    
                   />
                    <CustomInput 
                        labelText="Password:"
                        htmlFor='password'
                        className={`form__input`}
                        id="password"
                        name="password"
                        value={password}
                        type="text"
                        autoComplete="off"
                        onChange={onPasswordChanged}
                    
                   />
              <button
                  className="form__submit-button"
                  disabled={!canSave}
                        >
                    Create User

              </button>
               

               


           </form>
      </>
 


  


  return content
}

export default NewUserForm