import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import Games from './pages/Games/Games';

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
        <Route 
          path='/pokemon/:key' 
          element={(
          <Suspense fallback={<h1 style={{color : 'white', fontSize : '50px', marginTop : '50px'}}>Loading...</h1>}>
            <Pokemon />
          </Suspense>
          )}
        />
        <Route path='/allgames' element={<Games />}/>
      </Routes>
    </>
  )
}

export default App;
