import { createSlice } from "@reduxjs/toolkit";

const sliceCategory = createSlice({
    name: 'category',
    initialState: {
        categories: []
    },
    reducers: {
        getCategory: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const {getCategory} = sliceCategory.actions
export default sliceCategory.reducer