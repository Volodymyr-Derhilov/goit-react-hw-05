import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Navigation from './components/Navigation/Navigation'
import { Route, Routes } from 'react-router-dom';
//import HomePage from './pages/HomePage/HomePage'
//import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
//import MovieCast from './components/MovieCast/MovieCast'
//import MovieReviews from './components/MovieReviews/MovieReviews'
//import MoviesPage from './pages/MoviesPage/MoviesPage'
import { lazy, Suspense } from 'react'

const Navigation = lazy(() => import('./components/Navigation/Navigation'))
const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))


function App() {

  return (
    <main>
      <Navigation />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/movies' element={<MoviesPage />}></Route>
          <Route path='/movies/:movie_id' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />}></Route>
            <Route path='reviews' element={<MovieReviews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </main>
  )
}


export default App
