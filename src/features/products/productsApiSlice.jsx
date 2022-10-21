import { 
    createSelector,
    createEntityAdapter
 } from "@reduxjs/toolkit";

 import { apiSlice } from "../../app/api/apiSlice";

 const productsAdapter = createEntityAdapter({})

 const initialState = productsAdapter.getInitialState() //command + shift + L

 export const productsApiSlice = apiSlice.injectEndpoints ({
     endpoints: builder => ({
         getProducts: builder.query({
             query: () => '/products',
             validateStatus: (response, result) => {
                 return response.status === 200 && !result.isError
             },
            
             transformResponse: responseData => {
                 const loadedProducts = responseData.map(product => {
                     product.id = product._id
                     return product
                 })
                 return productsAdapter.setAll(initialState, loadedProducts)
             },
             provideTags: (result, error, arg) => {
                 if(result?.ids) {
                     return [
                         {type: 'Product', id: 'LIST'},
                         ...result.ids.map(id => ({type: 'Product', id}))
                     ]
                 } else return [{ type: 'Product', id: 'LIST'}]
             }

         }),
         addNewProduct: builder.mutation({
             query: initialProduct => ({
                 url: '/products',
                 method: 'POST',
                 body: {
                     ...initialProduct
                 }

             }),
             invalidatesTags: [
                 {type : 'Product', id: 'LIST'}
             ]
         }),
         updateProduct: builder.mutation({
             query: initialProduct => ({
                 url: '/products',
                 method: 'PATCH',
                 body: {
                     ...initialProduct
                 }

             }),
             invalidatesTags:(result, error, arg) => [
                {type : 'Product', id: arg.id}
            ]
         }),
         deleteProduct: builder.mutation({
             query: ({id}) => ({
                 url: '/products',
                 method: 'DELETE',
                 body: {id}
             }),
             invalidatesTags: (result, error, arg) => [
                {type : 'Product', id: arg.id}
            ]
         })
     })

 })

 export const {
     useGetProductsQuery,
     useUpdateProductMutation,
     useAddNewProductMutation,
    useDeleteProductMutation
 } = productsApiSlice

 export const selectProductsResult = productsApiSlice.endpoints.getProducts.select()

 //create memoized selector
 const selectProductssData = createSelector(
     selectProductsResult,
     productsResult => productsResult.data
 )

 export const {
     selectAll: selectAllProdcuts,
     selectById: selectProductById,
     selectIds: selectProductIds
 } = productsAdapter.getSelectors(state => selectProductssData(state) ?? initialState)