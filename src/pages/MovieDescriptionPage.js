import React from 'react'
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../assets/css/App.css"

const DescriptionPage = () => {

  //const { movies, setMovies } = useContext(dataContext);
  const [movie, setMovie] = useState({

    title: "",
    description: "",
    price: "",
    smallPoster: "",
    largePoster: "",
    movie: "",
    rentPrice: "",
    purchasePrice: "",
    featured: ""
  });

  const { id } = useParams();


  useEffect(() => {

    fetch(`https://digital-video-store-api.herokuapp.com/media/${id}`)
      .then((res) => {

        return res.json()
      })
      .then(json => {
        setMovie(json.body[0]);
        console.log(movie);
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
          <img className='movieposter' src={movie.smallPoster} alt="movie" />

          <div className='synopsis'>
            <h1 className='movietitle left-align'>{movie.title}</h1>
            <br />
            <b>Synopsis : </b> <br /> {movie.description}
            <br />

            <button className='btn'>Buy now ${movie.purchasePrice}</button>
            <button className='btn'>Rent  ${movie.rentPrice}</button>
          </div>
          <img className='descimg' src={movie.largePoster} alt="movie" />
        </div>

      </div>
      <Footer />

    </div>
  )
}

export default DescriptionPage
