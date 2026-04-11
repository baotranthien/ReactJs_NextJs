import React from 'react'
import { Link } from 'react-router-dom'
export default function Products() {
  return (
    <div>
      <h1>List of products:</h1>
      <Link to='/product/1'>Iphone</Link>
    </div>
  )
}
