import React from 'react'
import DisplayItem from '../components/DisplayItem';
import { useEffect, useContext } from 'react';
import dataContext from "../context/DigitalVideoStoreContext";
import {API_URL} from '../api'

const FeaturedMovies = () => {

    const { movies, setMovies } = useContext(dataContext);

    useEffect(() => {
        fetch("https://digital-video-store-api.herokuapp.com/movies/featured?isFeatured=true")
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setMovies(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    return (
        <div>
            <h1 className='left-align'> Featured Movies</h1>
            <div className='dis movies'>
                {movies.map((movie) => (
                    <DisplayItem id={movie.id} key={movie.id} title={movie.title} poster={movie.smallPoster} type="movies-and-tv/movie" />
                ))}
            </div>
        </div>
    )
}

export default FeaturedMovies
