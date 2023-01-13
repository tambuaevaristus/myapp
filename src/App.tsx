import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes >
        <Route  path='/' element={ <Home />} />
        <Route  path='/payment' element={ <Payment />} />

      </Routes>

      
    </div>
  );
}

export default App;
