import React from 'react'
import DisplayItem from '../components/DisplayItem';
import { useEffect, useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import { useLocation } from 'react-router'

const SearchResults = () => {

    const [movies, setMovies] = useState([{

        title: "",
        description: "",
        price: "",
        smallPoster: "",
        largePoster: "",
        movie: "",
        rentPrice: "",
        purchasePrice: "",
        featured: ""
      }]);

    const { word } = useParams();
    const location = useLocation()
  
    useEffect(() => {

      fetch(`https://digital-video-store-api.herokuapp.com/mediaItem/${word}`) //fetch(API_URL+ `/movies/${id}`) 
        .then((res) => {
  
          return res.json()
        })
        .then(json => {
          setMovies(json.body[0]);
         
          console.log(json.body[0]);
        })
        .catch((err) => {
          console.log(`Error ${err}`);
         
        })
    },[location.key])

    return (
        <div>
            <Header />
            <h1 className='left-align'> All Media</h1>
            <div className='dis movies'>
                {movies.map((movie) => (

                    <DisplayItem id={movie.id} key={movie.id} title={movie.title} poster={movie.smallPoster} type="movie" />
                    
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default SearchResults
