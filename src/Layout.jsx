import React from 'react'
import { Outlet } from 'react-router-dom'
//import Input from './components/Input'
import { Provider } from 'react-redux'
import { store } from './config/redux/store/store'

const Layout = () => {

  return (
    <div>
      <Provider store={store}>
      <Outlet/>
      </Provider>
        </div>
  )
}

export default Layout