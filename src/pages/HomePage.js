import React from 'react'
import FeaturedMovies from "../components/FeaturedMovies"
import FeaturedTvShows from "../components/FeaturedTvShows"
import Header from '../components/Header'
import Footer from '../components/Footer';
import "../assets/css/App.css"
import HeroSection from '../components/HeroSection'
import ContentSection from '../components/ContentSection';

const HomePage = () => {
    return (
        <div >
            <Header/>
            <HeroSection/>
            <FeaturedMovies />
            <FeaturedTvShows />
            <ContentSection/>
            <Footer/>
        </div>            
    )
}

export default HomePage
