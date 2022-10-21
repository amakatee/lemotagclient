import  {store} from '../../app/store'
import { productsApiSlice } from '../products/productsApiSlice'
import { usersApiSlice } from '../users/usersApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'


const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const products = store.dispatch(productsApiSlice.endpoints.getProducts.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        return () => {
            console.log('unsub')
            products.unsubscribe()
            users.unsubscribe()
        }

    }, [])
    return  <Outlet />
    
}

export default Prefetch