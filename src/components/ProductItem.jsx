import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

function ProductItem({id,image,name,price}) {

  const{currency} =useContext(Shopcontext)
  return (
    <Link className='text-gray-700' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />

      </div>
      <p className='pt-3 pb1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
