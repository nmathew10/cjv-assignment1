import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "../pages/HomePage";
import "../assets/css/App.css"
import Login from './Login';
import { useState } from 'react';
import dataContext from "../context/DigitalVideoStoreContext";
import Signup from './Signup';
import MovieListingPage from '../pages/MovieListingPage';
import MovieDescriptionPage from '../pages/MovieDescriptionPage';
import UserProfile from './UserProfile';
import SearchResults from './SearchResults';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);

  return (

    <div>
      <dataContext.Provider value={{ movies, setMovies, tvshows, setTvshows }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies-and-tv" element={<MovieListingPage />} />
            <Route path="/moviesandtv/:id" element={<MovieDescriptionPage />} />
            <Route path="/user/:id" element={<UserProfile/>}/>
            <Route path="/media/:word" element={<SearchResults/>} />
            {/* <Route path="/media/:word" element={<SearchResults key={Date.now()}/>} /> */}
          </Routes>
        </BrowserRouter>
      </dataContext.Provider>
    </div>
  )
}

export default App

