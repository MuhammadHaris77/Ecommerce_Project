import {configureStore } from '@reduxjs/toolkit'
import CardReducer from '../reducer/cartSlice'
export const store = configureStore({
 reducer: {
   cart: CardReducer
 }
})

