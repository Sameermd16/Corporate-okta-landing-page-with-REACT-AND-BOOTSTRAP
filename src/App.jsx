import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import './App.css'
import Main from "./components/pages/Main"
import HomeLayout from './components/Layouts/HomeLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App