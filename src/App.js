import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import Games from './pages/Games/Games';
import MyPokemons from './pages/MyPokemons/MyPokemons';

import { PokemonListProvider } from './common/context/Pokemons';
import { MyPokemonsProvider } from './common/context/MyPokemons';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<PokemonListProvider />}>
          <Route element={<MyPokemonsProvider />}>
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
            <Route path='/mypokemons' element={<MyPokemons />} />
            <Route path='/allgames' element={<Games />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
