import React, { useEffect, useState } from 'react'
import { add } from "../Store/CartSlice"
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Store/ProductSlice'
import { STATUESES } from '../Store/ProductSlice'
const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product) //{data: products} products in data
    console.log({ data: products, status })
    // const [products, setProducts] = useState([])
    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProduc = async () => {
        //     const res = await fetch('http://fakestoreapi.com/products')
        //     const data = await res.json()
        //     //console.log(data)
        //     setProducts(data)
        // }
        // fetchProduc()
    }, [])
    const handleadd = (product) => {
        dispatch(add(product))
    }
    if (status === STATUESES.LOADING) {
        return <h1>LOADING...</h1>
    }
    return (
        <div>
            <div className='row'>
                {products.map((product) => (

                    <div className='col-12 sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 '>
                        <div class="card img-fluid m-2">
                            <img class="card-img-top" src={product.image} alt="Product image" />
                            <div class="card-body">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text">{product.price}</p>
                                <a href="#" class="btn btn-primary" onClick={() => handleadd(product)}>Add to cark</a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>)
}
export default Product