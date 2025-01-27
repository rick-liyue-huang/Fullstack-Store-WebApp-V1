import React, { useEffect, useState } from 'react'
import { Product } from '../../app/models/products'
import { ProductList } from './ProductList'
import { useFetchProductsQuery } from './catelogApi';

export const Catelog = () => {

  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch('https://localhost:5001/api/products')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.log(error))

  // }, [])

  const { data: products, isLoading, error } = useFetchProductsQuery();

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>{`Something wrong happened`}</div>

  return (
    <>
      <ProductList products={products} />
    </>
  )
}
