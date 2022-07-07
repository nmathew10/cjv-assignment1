import React from 'react'
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../assets/css/App.css"

const TvShowDescriptionPage = () => {
    const [tvshow, setTvshow] = useState({
        title: "",
        description: "",
        image: "",
        price: ""
    })

    const { id } = useParams();

    useEffect(() => {

        fetch(`http://localhost:5000/tvshows/${id}`)
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setTvshow(json);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    return (
        <div className='container'>
            <Header />
            <div className='description'>

                <div className='descContainer'>
                    <img className='movieposter' src={tvshow.poster} alt="movie" />

                    <p className='synopsis'>
                        <h1 className='movietitle left-align'>{tvshow.title}</h1>
                        <br />
                        <b>Synopsis : </b> <br /> {tvshow.description}
                        <br />
                        <button className='btn'>Watch trailer</button>
                        <br />
                        <button className='btn'>Buy now ${tvshow.price}</button>
                        <button className='btn'>Rent  $3.99</button>
                    </p>
                    <img className='descimg' src={tvshow.poster} alt="movie" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TvShowDescriptionPage
