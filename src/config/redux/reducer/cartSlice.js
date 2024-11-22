import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        cart: [],
    },
    reducers:{
      addItem:(state,action)=>{
          console.log(action.payload)
          const index = state.cart.findIndex(item => item.id === action.payload.id)
          console.log(index)
          if(index === -1){
            action.payload.quantity = 1
            state.cart.push(action.payload)
          }else{
            state.cart[index].quantity += 1
          }
      },
      deleteItem : (state,action)=>{
         const index= state.cart.findIndex(item => item.id === action.payload.id)
         state.cart.splice(index,1)
      },
      lessQuantityItem : (state,action)=>{
        const index= state.cart.findIndex(item => item.id === action.payload.id)
        if(state.cart[index].quantity === 0){
          state.cart.splice(index,1)
          return
        }else{
          state.cart[index].quantity -= 1
          
        }
           },
     addQuantityItem : (state,action)=>{
      const index= state.cart.findIndex(item => item.id === action.payload.id)
      state.cart[index].quantity += 1
        
   }

    }
})

export const {addItem,deleteItem,addQuantityItem,lessQuantityItem} = cartSlice.actions
export default cartSlice.reducer;  