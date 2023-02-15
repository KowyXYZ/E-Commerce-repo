import { createSlice } from "@reduxjs/toolkit";


const sliceCart =  createSlice({
    name: 'carts',
    initialState: {
        cart: []
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
        }
    }

})


export const { getCartItems } = sliceCart.actions
export default sliceCart.reducer