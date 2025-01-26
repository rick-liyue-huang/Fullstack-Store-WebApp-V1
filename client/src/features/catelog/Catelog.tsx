import React from 'react'
import { Product } from '../../app/models/products'
import { ProductList } from './ProductList'

export const Catelog = ({ products }: { products: Product[] }) => {
  return (
    <>
      <ProductList products={products} />
    </>
  )
}
