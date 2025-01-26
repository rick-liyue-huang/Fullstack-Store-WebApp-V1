import React, { useEffect, useState } from 'react'
import { Product } from '../../app/models/products'
import { ProductList } from './ProductList'

export const Catelog = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error))

  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  )
}
