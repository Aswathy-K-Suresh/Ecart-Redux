import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:'cartlist',
    initialState:[],
    reducers:{
        // action define
        //1. add to wishlist - array of data added to wishlist component
        deleteFromcartlist:(state,action)=>{
          return  state.filter(item=>item.id != action.payload)
         // alert("product deleted")
        },
        addToCart:(state,action)=>{
            state.push(action.payload)
            alert("Added to cart")
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
})



export const {deleteFromcartlist,addToCart,emptyCart} =cartSlice.actions;
export default cartSlice.reducer;