import { createSlice } from "@reduxjs/toolkit";

const sliceBackground = createSlice({
    name: 'background',
    initialState: {
        isActive: localStorage.getItem('bg') ? JSON.parse(localStorage.getItem('bg')) : false
    },
    reducers: {
        setActive: (state, action) => {
            state.isActive = action.payload
            localStorage.setItem('bg', JSON.stringify(state.isActive))
        }
    }
})

export const {setActive} = sliceBackground.actions
export default sliceBackground.reducer