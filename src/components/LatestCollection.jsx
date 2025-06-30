import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { products } from '../assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

function LatestCollection() {

  const {Products} = useContext(Shopcontext);
  const [latestProducts,setLatestProducts] = useState([]);
  useEffect(()=>{
    setLatestProducts(products.slice(0,12));
  },[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum hic impedit error quos officiis ducimus!
        </p>
      </div>
      {/* rendering product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
       {
        latestProducts.map((item,index)=>(
          <ProductItem key={index} image={item.image} id={item._id} name={item.name} price={item.price}/>
        ))
       }
      </div>
    </div>
  )
}

export default LatestCollection
