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
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';




const SingleProduct = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState(false)
  const [open, setOpen] = React.useState(false);

  const { id } = useParams()
  console.log(id)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
 

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
    setAlert(true)
    setOpen(true);
    setTimeout(()=>{
     setAlert(false)
     setOpen(false);
 
    },2000)
    }




  return (
    <div>
      <ResponsiveAppBar />
      <div className='text-center pt-4 '>
        <Typography className="text-center" variant='h4' color='#bf360c'>
          PRODUCT
        </Typography>

      </div>
   
      
      <div className='text-center'>
        {loading && <CircularProgress className='text-center' color='#bf360c' />}

      </div>
        <div>
        {
         alert &&   <div>
         <Modal
           open={open}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
         >
           <Box sx={style}>
             <Typography id="modal-modal-title" variant="h6" component="h2">
             <Alert sx={{zIndex:1}} icon={<CheckIcon fontSize="inherit" />} severity="success">
            Product Add to Cart successfully.
          </Alert>         </Typography>
           </Box>
         </Modal>
       </div>
        }

      </div>
  
      {
        data && <Container    >

          <Card index={data && data.id} sx={{ width: '70%', margin:  " auto", height: '500px', padding: 5 }}>
            <CardMedia
              sx={{ height: '200px', width: "100%", padding: 10 }}
              image={data && data.thumbnail}
              title="product image"
            />
            <br />
            <Typography gutterBottom variant="h6" component="div">
              <b>{data && data.title}</b> 
            </Typography>
            <Typography variant="body" sx={{ color: '#263238' }}>
              <b>Description :</b> {data && data.description}
            </Typography>
             <br />
            <Typography variant="body" sx={{ color: '263238' }}>
              <b>Category :</b>  {data && data.category}
            </Typography>
            <br />
            <Typography variant="body" sx={{ color: 'red' }}>
              <b>Price : $</b>  {data && data.price}
            </Typography>
            <Typography variant="body" sx={{ color: 'text.secondary' }}>

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