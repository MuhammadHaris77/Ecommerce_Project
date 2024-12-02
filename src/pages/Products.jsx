import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/Navbar';
import SingleCard from '../components/Card';
import { Container, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux/reducer/cartSlice';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Products = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [alert, setAlert] = useState(false)
  const [open, setOpen] = React.useState(false);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setProducts(res.products)
      })
      .catch((error) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })


  }, [])


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
  
  // console.log(products)

  const navigate = useNavigate()

  const sigleProduct = (item) => {
    navigate(`/product/${item.id}`)
  }



///// use dispatch //////////////////
 const dispatch = useDispatch()

 const addToCartItem=(item)=>{
   dispatch(addItem(item))
   setAlert(true)
   setOpen(true);
   setTimeout(()=>{
    setAlert(false)
    setOpen(false);

   },2000)
 
 }

  return (
    <>
  
      <ResponsiveAppBar />
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
   
      <div className='text-center p-4 '>
        <Typography className="text-center" variant='h2' color='#bf360c'>
          ALL PRODUCTS
        </Typography>

      </div>
      <div className='text-center'>
      {loading && <CircularProgress />}
      {products && products.map((item, index) => {
        return <div  key={index} className='m-auto justify-center p-1 d-flex d-inline-flex'>

            <SingleCard title={item.title} description={item.description} price={item.price} category={item.category} brand={item.brand} src={item.thumbnail}  addToCart={()=>addToCartItem(item)}  func={() => sigleProduct(item)} />
          </div>


      

      })}
      {error && <Container className='border border-slate-950  mt-4 p-4 '>
        <Typography className="text-center" variant='h2' color='#bf360c'>
          
          Page not found! 
        </Typography>
    </Container>
}

      </div>
 
    </>

  )
}

export default Products;