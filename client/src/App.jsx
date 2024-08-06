import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Products from './Products'
import OtherProducts from './OtherProducts'


function App() {
 

  return (
   <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/product/men' element={<Products/>}/>
        <Route path='/product/women' element={<Products/>}/>
        <Route path='/product/kids' element={<Products/>}/>
        <Route path='/product/bts' element={<OtherProducts/>}/>
        <Route path='/product/sale' element={<OtherProducts/>}/>
        <Route path='/product/3stripes' element={<OtherProducts/>}/>
      </Route>
   </Routes>
    )
}

export default App
 