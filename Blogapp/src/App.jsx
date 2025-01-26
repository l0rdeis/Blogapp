import { TextField } from '@mui/material'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import BlogPage from './components/BlogPage'
import Home from './components/Home'
function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Routes>
      <Route path='/add-blog' element={<BlogPage/>}></Route>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
      
    </>
  )
}

export default App
