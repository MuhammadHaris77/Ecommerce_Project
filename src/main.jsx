import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './pages/Login.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Products from './pages/Products.jsx'
import Register from './pages/Register.jsx'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'product/:id',
        element: <SingleProduct />
      }
    ]
  },
  {
    path: "*",
    element: <Container className='border border-slate-950  mt-4 p-4 '>
        <Typography className="text-center" variant='h2' color='#bf360c'>
          
          Page not found! 
        </Typography>
    </Container>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
    
  </StrictMode>,
)
