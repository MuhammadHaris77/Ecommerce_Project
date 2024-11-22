import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress, Container } from '@mui/material';
import ResponsiveAppBar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux/reducer/cartSlice';
import CardActions from '@mui/material/CardActions';




const SingleProduct = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  console.log(id)


  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setData(res)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })


  }, [])

  const dispatch = useDispatch()

  const addToCartItem = () => {
    console.log(data)
    dispatch(addItem(data))
  }




  return (
    <div>
      <ResponsiveAppBar />
      <div className='text-center' >
        <Typography className="text-center p-4" variant='h2' color='#bf360c'>
          Product
        </Typography>
      </div>
      <div className='text-center'>
        {loading && <CircularProgress className='text-center' color='#bf360c' />}

      </div>

      {
        data && <Container    >

          <Card index={data && data.id} sx={{ width: '100%',height:'100%' ,padding:5}}>
            <CardMedia  
              sx={{ height:'400px',  padding:10}}
              image={data && data.thumbnail}
              title="product image"
            />
              <Typography gutterBottom variant="h3" component="div">
                {data && data.title}
              </Typography>
              <Typography variant="h6" sx={{ color: '#263238' }}>
                <b>Description :</b> {data && data.description}
              </Typography>
              <br />
              <Typography variant="h5" sx={{ color: '#263238' }}>
                <b>Brand :</b>{data && data.brand}
              </Typography>
              <br />
              <Typography variant="h5" sx={{ color: '263238' }}>
                <b>Category :</b>  {data && data.category}
              </Typography>
              <br />
              <Typography variant="h5" sx={{ color: 'red' }}>
                <b>Price : $</b>  {data && data.price}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                <CardActions sx={{ justifyContent: 'start' }}>
                  <Button variant="contained" sx={{ color: 'white', background: '#bf360c' }} onClick={addToCartItem}  >Add to Cart</Button>
                </CardActions>

              </Typography>
          </Card>


        </Container >
      }

    </div>
  )
}

export default SingleProduct