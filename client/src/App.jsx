import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Products from './Products'
import OtherProducts from './OtherProducts'
import Product from './Product'
import { UserContextProvider } from './CartContext'
import Cart from './Cart'

function App() {
 

  return (
    <UserContextProvider>
   <Routes>

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/product/men' element={<Products/>}/>
        <Route path='/product/women' element={<Products/>}/>
        <Route path='/product/kids' element={<Products/>}/>
        <Route path='/product/bts' element={<OtherProducts/>}/>
        <Route path='/product/sale' element={<OtherProducts/>}/>
        <Route path='/product/3stripes' element={<OtherProducts/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
   </Routes>
   </UserContextProvider>
    )
}

export default App
 