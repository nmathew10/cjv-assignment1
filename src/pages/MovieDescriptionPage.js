import React from 'react'
import { useState, useEffect } from "react"
import { useParams} from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../assets/css/App.css"

const DescriptionPage = () => {

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    image: "",
    price: ""
  })

  const { id } = useParams();


  useEffect(() => {

    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => {

        return res.json()
      })
      .then(json => {
        setMovie(json);
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
          <img className='movieposter' src={movie.poster} alt="movie" />

          <p className='synopsis'>
          <h1 className='movietitle left-align'>{movie.title}</h1>
            <br />
            <b>Synopsis : </b> <br /> {movie.description}
            <br/>
            <button className='btn'>Watch trailor</button> 
            <br/>
            <button className='btn'>Buy now ${movie.price}</button>
            <button className='btn'>Rent  $3.99</button>
          </p>
          <img className='descimg' src={movie.poster} alt="movie" />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default DescriptionPage
