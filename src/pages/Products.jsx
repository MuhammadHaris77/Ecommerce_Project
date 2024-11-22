import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/Navbar';
import SingleCard from '../components/Card';
import { Container, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux/reducer/cartSlice';

const Products = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
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
  // console.log(products)

  const navigate = useNavigate()

  const sigleProduct = (item) => {
    navigate(`/product/${item.id}`)
  }


///// use dispatch //////////////////
 const dispatch = useDispatch()

 const addToCartItem=(item)=>{
   dispatch(addItem(item))
 }

  return (
    <>
      <ResponsiveAppBar />
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