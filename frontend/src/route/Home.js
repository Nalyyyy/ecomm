import React, { useEffect } from 'react'

import '../style/home.css'
import Card from '../components/Card'
import Slider from '../components/Slider'
import MetaData from '../components/MetaData'
import Loader from '../components/Loader'

import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'
import { useParams, Link } from 'react-router-dom'


export default function Home() {

  const match = useParams();

  const alert= useAlert();

  const dispatch = useDispatch();

  const { loading, products, error, productsCount} =useSelector(state=>state.products)

  const keyword = match.keyword

  useEffect(()=>{

    if(error){
      alert.success('Success')
      return alert.error(error)
    }

    dispatch(getProducts(keyword))


  },[dispatch,alert, error ,keyword])



  return (
    <div className='Home'>
        <MetaData title={'Home'}/>
        <Slider/>
        <section className='populaires'>
            <h1>Les populaires</h1>
            <p>Découvrez les articles les plus populaires</p>

            {loading ? <Loader/> : (
            
            <div className='cards'>
                {products && products.map(product =>(
                  <Card key={product._id} product={product}/>
                ))}
            </div>
            )}
  
            <Link to={'/products'} className='btn'>SHOP ALL</Link>
        </section>
    
    </div>
  )
}

