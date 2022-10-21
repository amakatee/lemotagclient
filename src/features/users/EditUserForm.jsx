import React, {useState, useEffect} from 'react'
import { useUpdateUserMutation, useDeleteUserMutation } from './usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { ROLES } from '../../config/roles'
import CustomInput from '../../components/forms/CustomInput'

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const EditUserForm = ({user}) => {
    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error

    }] = useUpdateUserMutation()

    const [deleteUser, {
        isSuccess: isDeletingSuccess,
        isError: isDeletingError,
        error: delerror
    }] = useDeleteUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState(user.username)
    const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState(user.password)
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(user.roles)
    const [active, setActive] = useState(user.active)
    const [image, setImage] = useState('')

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username))
     }, [username])

     useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
     }, [password])

     useEffect(() => {
         if(isSuccess || isDeletingSuccess) {
             setUsername('')
             setPassword('')
             setRoles([])
             navigate(`/shop/${user.username}`)
         }
       
     }, [isSuccess, isDeletingSuccess, navigate])
     
    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onActiveChanged = async () => setActive(prev != prev)

    const handleImage = (e) => {
        const file = e.target.files[0]
        setFileToBase(file)
        console.log(file)
    }

    const setFileToBase = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImage(reader.result)
        }
    }

    const onSaveUserClicked = async(e) => {
        if(password) {
            await updateUser({id: user.id, username, password, roles, active, image})
          
        } else {
            await updateUser({ id: user.id, username, roles, active, image})
        }
    }

    const onDeleteUserClicked = async () => {
        await deleteUser({ id: user.id})
        navigate('/')
    }
    let canSave
    if(canSave) {
        canSave = [validUsername, validPassword].every(Boolean) && !isLoading

    } else {
        canSave = [validUsername] && !isLoading
    }

    const errContent = (error?.data?.message || delerror?.data?.message) ?? '' 

    const content = (
        <section>
        <p>{errContent}</p>
        <form className='newproduct__form' onSubmit={e => e.preventDefault()}>
             <div className='form__title'>
                 
               <h2>Edit User</h2>
            
            <CustomInput
                     labelText="Username"
                     htmlFor='username'
                     className={`form__input`}
                     id="username"
                     name="username"
                     type="text"
                     autoComplete='off'
                     value={username}
                     onChange={onUsernameChanged}
             />
             <CustomInput
                    labelText="Password"
                    htmlFor='password'
                    className={`form__input`}
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChanged}
             />
          
          
             {/* <label className='form__label' htmlFor='password'>
                Active:
            </label>
            <input
                    className='form__checkbox'
                    id="user-active"
                    name="user-active"
                    type="checkbox"
                    value={active}
                    onChange={onActiveChanged}
             /> */}

            
            <div>
                <input onChange={(e) => handleImage(e)} type="file" id="formupload" name="image"/>
                <img width={30} src={image} alt='' />
            </div>   

            <div className='form__action-editbtn'>
                    <button
                    title='save'
                    onClick={onSaveUserClicked}
                    disabled={!canSave}
                    >
                        Save

                    </button>
                    <button
                    title='Delete'
                    onClick={onDeleteUserClicked}
                    >
                        Delete

                    </button>
                </div>
                </div>

        </form>
        </section>

    )
    return content
}

export default EditUserForm