import { configureStore } from "@reduxjs/toolkit";
import sliceCategory from "./sliceCategory";
import sliceProducts from "./sliceProducts";
import sliceCart from "./sliceCart";
import sliceBackground from "./sliceBackground";


const store = configureStore({
    reducer: {
        products: sliceProducts,
        category: sliceCategory,
        cart: sliceCart,
        background: sliceBackground
    }
})

export default store