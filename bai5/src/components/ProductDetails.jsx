import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate()
    function handleCheckout(){
      navigate('/checkout')
    }
  return (
    <div>
      <p>
        detail of {id}
        render--that id
      </p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}
