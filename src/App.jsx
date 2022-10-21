import './sass/styles.scss'
import UsersList from './features/users/UsersList'
import ProductsList from './features/products/ProductsList'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Prefetch from './features/auth/Prefetch'
import UserPage from './features/users/UserPage'
import EditUser from './features/users/EditUser'
import EditProductForm from './features/products/EditProductForm'
import NotFound from './features/NotFound'
import EditProduct from './features/products/EditProduct'

import NewUserForm from './features/users/NewUserForm'
import NewProductForm from './features/products/NewProductForm'
import SingleProduct from './features/products/SingleProduct'
import Home from './features/home/Home'
import Login from './features/auth/Login'
import AuthLayout from './features/auth/AuthLayout'
import Registration from './features/auth/Registration'


function App() {
  return (
   <Routes>
     <Route path='/' element={<Layout />}>
       <Route element={<Prefetch />}>
         
         <Route path="/auth" element={<AuthLayout />}>
           <Route index element={<Login />}  />
           <Route path='registration' element={<Registration />}  />
         </Route>
          <Route index element={<Home />} />

         <Route path="newuser" element={<NewUserForm />}/>
            <Route path='/shop'  >
             <Route index element={<UsersList />} />
             <Route path=":username" element={<UserPage />} />
             <Route path=":username/:id" element={<SingleProduct />} />
             <Route path=":username/newproduct" element={<NewProductForm/>} />
             <Route path=":username/edituser" element={<EditUser/>} />
         </Route>   

         <Route path='/products'  >
           <Route index element={<ProductsList />} />
           <Route path=":id" element={<SingleProduct />} />
           <Route path=":id/editproduct" element={<EditProduct/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
     </Route>
    </Route>
   </Routes>
   
  )
}

export default App
