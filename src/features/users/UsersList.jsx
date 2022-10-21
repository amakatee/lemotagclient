import React from 'react'
import { selectUserById, useGetUsersQuery } from './usersApiSlice'
import User from './User'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('usersList', {
        pollingInterval:60000,
        refetchOnFocus:true,
        refetchOnMountOrArgChange: true
    })
    console.log(users)
    
    let content 
    if(isLoading) content = <p>Loading ...</p> 
    if(isError) {
        content = <p>{error?.data}</p>
    }
    if(isSuccess) {
        const {ids} = users
      
         

        const tableContent = ids?.length ? ids.map(userId => <User key={userId} userId={userId} />)
        : null

        content = (
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Roles</th>
                        <th>Edit</th>
    
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                   
                  
                </tbody>
            </table>
        )
    
     
    }

    return content
   
}

export default UsersList