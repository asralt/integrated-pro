import React from 'react'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Social from './components/Social'
import NotFound from './404/NotFound'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <div className=''> 
            <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>


            <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
     </Router>
      <div className="flex justify-center items-center mt-4 space-x-6">
          <Social />
      </div>


    </div>
  )
}

export default App
