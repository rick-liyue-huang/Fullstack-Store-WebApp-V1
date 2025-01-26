import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Product } from "../../app/models/products"

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card elevation={3} sx={{ width: 280,  boarderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <CardMedia sx={{ height: 240, backgroundSize: 'cover' }} image={product.pictureUrl} title={product.name} />
      <CardContent>
        <Typography gutterBottom variant='subtitle2' sx={{ textTransform: 'uppercase' }}>{product.name}</Typography>
        <Typography variant='h6' color='secondary.main'>${(product.price / 100).toFixed(2)}</Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button size='small' color='primary'>Add to Cart</Button>
        <Button size='small' color='secondary'>View</Button>
      </CardActions>
    </Card>
  )
}
