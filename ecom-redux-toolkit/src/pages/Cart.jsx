import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.cart)
  const handleremove = (productId) => {
    console.log("delete click")
    dispatch(remove(productId))
  }
  return (
    <div>
      <div className='container'>
        <h3>Select Cart: </h3>
        <div className='cartwarapper row'>
          {product.map((product, i) => (
            <div className='row' key={i} >
              <div className='col-4 p-2 d-flex justify-content-center align-items-center'>
                <img src={product.image} />
              </div>
              <div className='col-4'>
                <h5 className=''>{product.title}</h5>
              </div>
              <div className='col-2'>
                <h5>{product.price}</h5>
              </div>
              <div className='col-2'>
                <button className='btnn' onClick={() => handleremove(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart