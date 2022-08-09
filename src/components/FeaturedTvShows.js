import React from 'react'
import DisplayItem from '../components/DisplayItem';
import { useEffect, useContext } from 'react';
import dataContext from "../context/DigitalVideoStoreContext";
import {API_URL} from '../api'

const FeaturedTvShows = () => {
    const { tvshows, setTvshows } = useContext(dataContext);

    useEffect(() => {
        fetch("https://digital-video-store-api.herokuapp.com/tvshows/featured?isFeatured=true")
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setTvshows(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    return (
        <div>
            <h1 className='left-align'> Featured TV Shows</h1>
            <div className='dis movies'>
                {tvshows.map((show) => (
                    <DisplayItem id={show.id} key={show.id} title={show.title} poster={show.smallPoster} type="movies-and-tv/tv" />
                ))}
            </div>
        </div>
    )
}

export default FeaturedTvShows
