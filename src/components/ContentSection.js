import React from 'react'
import { Link } from 'react-router-dom';

const ContentSection = () => {
    return (
        <div className='d-flex justify-content-start m-4'>
            <h1 className='left-align'>Sponsored</h1>
            <div className='trivia'>
                <Link to="">
                    <img className='triviacontent' alt='banner'
                        src="https://trivia20.com/ckfinder/userfiles/images/movie-trivia-game-banner.png"></img>
                </Link>
                <Link to="">
                    <img className='triviacontent' alt='banner'
                        src="https://elcapitantheatre.com/media/1986/elcap_con_emailbanner800x176_final.jpg"></img>

                </Link>
            </div>
        </div>
    )
}

export default ContentSection
