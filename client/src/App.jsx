import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'


function App() {
 

  return (
   <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<h1>home</h1>}/>
        <Route path='about' element={<h1>about</h1>}/>
        <Route path='contact' element={<h1>contact</h1>}/>
      </Route>
   </Routes>
    )
}

export default App
 