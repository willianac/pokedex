import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route 
          path='/' 
          element={(
          <Suspense fallback={<h1 style={{color : 'white'}}>Loading...</h1>}> 
            <Home />
          </Suspense>
          )} 
        />
      </Routes>
    </>
  )
}

export default App;
