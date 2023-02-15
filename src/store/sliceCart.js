import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";


const sliceCart =  createSlice({
    name: 'carts',
    initialState: {
        cart: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    },
    reducers: {
        getCartItems: (state, action) => {
            const getIndex = state.cart.findIndex((item) => item.id  === action.payload.id)
            
            if (getIndex >= 0) {
                state.cart[getIndex].cartItems += 1
            } else {
                const tempProd = {...action.payload, cartItems: 1}
                state.cart.push(tempProd)
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cart))
        },

        removeFromCart: (state, action) => {
            const filtered = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = filtered

            localStorage.setItem('cartItems', JSON.stringify(state.cart))

        },

        removeAllCart: (state, action) => {
            state.cart = []
            localStorage.setItem('cartItems', JSON.stringify(state.cart))
        },

        decreaseCartItem: (state, action) => {
            const getIndex = state.cart.findIndex((item) => item.id  === action.payload.id)

            if ( state.cart[getIndex].cartItems > 1 ) {
                state.cart[getIndex].cartItems -= 1
            } else if ( state.cart[getIndex].cartItems === 1) {
                const filtered = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = filtered

            }
            localStorage.setItem('cartItems', JSON.stringify(state.cart))

        },

        
    }

})


export const { getCartItems, removeFromCart, removeAllCart, decreaseCartItem } = sliceCart.actions
export default sliceCart.reducer