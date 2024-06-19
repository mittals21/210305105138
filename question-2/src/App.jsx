import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:productID" element={<Products />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
