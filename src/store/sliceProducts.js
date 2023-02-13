import { createSlice } from '@reduxjs/toolkit'

const sliceProducts = createSlice({
    name: 'product',
    initialState: {
        data: []
    },
    reducers: {
        getData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {getData} = sliceProducts.actions
export default sliceProducts.reducer