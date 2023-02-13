import { configureStore } from "@reduxjs/toolkit";
import sliceCategory from "./sliceCategory";
import sliceProducts from "./sliceProducts";

const store = configureStore({
    reducer: {
        products: sliceProducts,
        category: sliceCategory
    }
})

export default store