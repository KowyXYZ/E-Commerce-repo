import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Cart from "./Pages/Cart";

//Layouts
import ProductsLayout from "./Layouts/ProductsLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>

      
      <Route path="products" element={<ProductsLayout/>}>
        <Route index element={<Products/>}/>
      </Route>

      <Route path="cart" element={<Cart/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
