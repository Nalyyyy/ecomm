import React, { useState, useEffect } from 'react'
import Pagination from 'react-js-pagination'

import '../style/home.css'
import Card from '../components/Card'
import MetaData from '../components/MetaData'
import Loader from '../components/Loader'

import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom'

const Products = () => {
 
  const [currentPage, setCurrentPage] = useState(1)

  const match = useParams();

  const alert= useAlert();

  const dispatch = useDispatch();

  const { loading, products, error, productsCount, resPerPage} =useSelector(state=>state.products)

  const keyword = match.keyword

  useEffect(()=>{

    if(error){
      alert.success('Success')
      return alert.error(error)
    }

    dispatch(getProducts(keyword, currentPage))


  },[dispatch,alert, error ,keyword, currentPage])

  function setCurrentPageNo(pageNumber){
    setCurrentPage(pageNumber)
  }

  return (
    <div className='productsPage'>

        <MetaData title={'Products'}/>

        <div className='baneer'/>

        {loading ? <Loader/> : (
            
            <div className='products'>
                {products && products.map(product =>(
                  <Card key={product._id} product={product}/>
                ))}
            </div>
        )}

        {resPerPage <= productsCount && (
         
         <div className='pagination'>
           {/* //////////vid #65 */}
           <Pagination
             activePage={currentPage}
             itemsCountPerPage={resPerPage}
             totalItemsCount={productsCount}
             onChange={setCurrentPageNo}
             nextPageText={'Next'}
             prevPageText={'Prev'}
             firstPageText={'First'}
             lastPageText={'Last'}
             itemClass='page-item'
             linkClass='page-link'
           />
         </div>
       )}
    </div>
  )
}

export default Products