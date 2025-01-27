import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../../app/models/products';
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import { useFetchProductDetailsQuery } from './catelogApi';

export const ProductDetails = () => {

  const { id } = useParams();
  // const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {
  //   fetch(`https://localhost:5001/api/products/${id}`)
  //     .then(response => response.json())
  //     .then(data => setProduct(data))
  //     .catch(error => console.log(error));
  // }, [id]);

  const { data: product, isLoading, error } = useFetchProductDetailsQuery(id ? parseInt(id) : 0);

  const productDetails = [
    { label: 'Name', value: product?.name },
    { label: 'Description', value: product?.description },
    { label: 'Price', value: product?.price },
    { label: 'Brand', value: product?.brand },
    { label: 'Count In Stock', value: product?.quantityInStock },
  ]

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{`Single Product display wrong happened`}</div>
  }

  return (
    <Grid2 container spacing={6} maxWidth={'lg'}
      sx={{ mx: 'auto' }}
    >
      <Grid2 size={6}>
        <img src={product?.pictureUrl} alt={`${product.name}`} style={{ width: '100%' }} />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant='h3'>{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant='h4' color='secondary.main'>{(product.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table sx={{
            '$ td': { fontSize: '1.2rem' },
          }}>
            <TableBody>
              {
                productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: 'bold' }}>{detail.label}</TableCell>
                    <TableCell>{detail.value}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <Grid2 container spacing={2} marginTop={3}>
          <Grid2 size={6}>
            <TextField variant='outlined' type='number' label='Quantity in Cart' fullWidth defaultValue={1} />
          </Grid2>
          <Grid2 size={6}>
            <Button color='primary' size='large' variant='contained' fullWidth sx={{ height: '100%' }}>Add to Cart</Button>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}
