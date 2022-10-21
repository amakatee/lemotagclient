import React from 'react'
import { useGetProductsQuery } from './productsApiSlice'
import Product from './Product'
import Navbar from '../../components/Navbar'
import ProductFilter from '../../components/ProductFilter'

const ProductsList = () => {
    const { 
        data: products,
        isSuccess,
        isLoading,
        isError,
        error} = useGetProductsQuery('productsList', {
            pollingInterval: 15000,
            refetchOnFocus: true,
            refetchOnMountOrArgChange: true
        })

        let content
        if(isLoading) return <p>Loading...</p>
        if(isError) {
            content = <p>{error?.data?.message}</p>
        }

        if(isSuccess) {
            const {ids} = products
            const tableContent = ids?.length && ids.map(prodId => <Product key={prodId} prodId={prodId} />)
 
        
 
            
            return (
              <>
              <Navbar />
               <div className='products__main-cont'>
                   <ProductFilter />
                   <div className='products__cont'>{tableContent}</div>
               </div>  
              </>  
              
            
            )
        }

}

export default ProductsList