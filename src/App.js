import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Cart from './Cart'
import Login from './Login'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Admin from './Admin'
export default function App() {
  return (
    <div>
        <Header/>
        <BrowserRouter>
            <Navbar/>
            <hr></hr>
            <Routes>
                <Route index element={<Content/>}/>
                <Route path = "content" element ={<Content/>}/>
                <Route path = "cart" element ={<Cart/>}/>
                <Route path = "login" element ={<Login/>}></Route>
                <Route path = "signup" element ={<Signup/>}/>
                <Route path = "admin" element ={<Admin/>}/>

            </Routes>
        </BrowserRouter>

        <Footer/>
    </div>
  )
}
