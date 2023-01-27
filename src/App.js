import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import About from './newFolder/About/About';
import Contact from './newFolder/Contact/contact';
import Home from './newFolder/Home/home';
import Navbar from './newFolder/nav/nav';
import Work from './newFolder/work/work';

function App() {
  return (
    <div className="container-fluid App">
      <Navbar/>
      <Routes>
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;