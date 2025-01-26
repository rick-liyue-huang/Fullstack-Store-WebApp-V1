
import { Box } from '@mui/material'
import { Product } from '../../app/models/products'
import { ProductCard } from './ProductCard'

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </Box>
  )
}
