import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { useEffect, useContext } from 'react';
import dataContext from "../context/DigitalVideoStoreContext";
import DisplayItem from '../components/DisplayItem';
import { API_URL } from '../api';


const MovieListingPage = () => {

    const { movies, setMovies } = useContext(dataContext);
    const { tvshows, setTvshows } = useContext(dataContext);

    useEffect(() => {

        fetch("https://digital-video-store-api.herokuapp.com/tvshows")  //fetch(API_URL + "/tvshows") 
            .then((res) => {

                return res.json()
            })
            .then(json => {
                console.log(json.body)
                setTvshows(json.body);
            })
            .catch((err) => {
                alert("some")
                console.log(`Error ${err}`);
            });
            fetch("https://digital-video-store-api.herokuapp.com/movies") //fetch(API_URL + "/movies")
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setMovies(json.body);
                console.log(movies);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    return (
        <div>
            <Header />
            <h1 className='left-align'> All Movies</h1>
            <div className='dis movies'>
                {movies.map((movie) => (

                    <DisplayItem id={movie.id} key={movie.id} title={movie.title} poster={movie.smallPoster} type="movie" />
                ))}
            </div>
            <h1 className='left-align'> All TV</h1>
            <div className='dis movies'>
                {tvshows.map((show) => (
                    <DisplayItem id={show.id} key={show.id} title={show.title} poster={show.smallPoster} type="tv" />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default MovieListingPage
