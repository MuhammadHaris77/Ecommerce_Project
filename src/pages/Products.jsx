import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from '../components/Navbar';
import SingleCard from '../components/Card';
import { Container, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


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

  return (
    <>
      <ResponsiveAppBar />

      <div className='text-center p-4 '  >
        <Typography className="text-center" variant='h2' color='#bf360c'>
          ALL Products
        </Typography>

        {loading && <CircularProgress />}
        {products && products.map((item) => {
          return (
            <div className='m-2 d-flex d-inline-flex'>
                
                 <SingleCard key={item.id} title={item.title} description={item.description} price={item.price} category={item.category} brand={item.brand} src={item.thumbnail} func={() => sigleProduct(item)} /> 
            </div>


          )

        })}
        {error && <h1>Error Found 404!</h1>}

      </div>


    </>

  )
}

export default Products;