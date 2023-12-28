import React, {Fragment, useEffect} from 'react'
import '../style/product.css'

import Loader from '../components/Loader'
import MetaData from '../components/MetaData'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../actions/productActions'
import { useAlert } from 'react-alert'

const Product = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const alert = useAlert();

    const{loading, error, product }= useSelector(state=>state.productDetails)

    useEffect(()=>{
        dispatch(getProductDetails(id))

        if(error){
            alert.success('Success')
            return alert.error(error)
        }

    },[dispatch, alert, error, id])


  return (
    <Fragment>
        {loading ? <Loader/> : (
            
            <div>
                <MetaData title={product.name}/>
                <div className='baneer'></div>
                <div className='product'>
                    <div className='productImg'>
                        <img src={product.images } alt={product.name}/>
                    </div>
                    <div className='productInfos'>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                    </div>
                </div>

            </div>
        ) }
    </Fragment>
  )
}

export default Product