import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';

function App() {

  const [total, setTotal] = useState<number>(0)
  return (
    <div className="">
      <Navbar total={total}/>

      <Routes >
        <Route  path='/' element={ <Home setTotal = {setTotal} />} />
        <Route  path='/payment' element={ <Payment />} />

      </Routes>


    </div>
  );
}

export default App;
