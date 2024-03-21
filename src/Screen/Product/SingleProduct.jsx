import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const url = "https://fakestoreapi.com"

function SingleProduct() {

    const [product,setProduct] =useState({})

    //to read router params

    let params = useParams()

    const readProduct =async () => {
        await axios.get(`${url}/products/${params.id}`)
        .then(res=> {
            console.log(`single =`,res.data)
            setProduct(res.data)

        }).catch(err => toast.error(err.message))
    }

    useEffect(()=> {
        readProduct()
    },[])
    return (
        <div className='container single-product'>
            <div className='row'>
                <div className='col img-block'>
                    <h4 className='title'>Product Info</h4>

                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <img src={product?.image} alt="" className='product-img' />
                </div>
                <div className='col'>
                    <div className='product-info'>

                        <h1 className='title'> <br />{product?.title}</h1>

                        <p className='price'><strong>Price:</strong>&#8377;{product?.price}</p>

                        <p className='category'><strong>category:</strong> <br />{product?.category}</p>

                        <p className='disc'> <strong>Description:</strong><br />{product?.description}</p>

                        <p className='rating'> <strong>Rating:</strong> {product.rating ? product.rating.rate :0}</p>
                    </div>
                    <div className='cart-btn'>
                        <button className='btn'>
                            <i className='bi bi-cart'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default SingleProduct
