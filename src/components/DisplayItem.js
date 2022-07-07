import React from 'react'
import { Link } from 'react-router-dom';

const DisplayItem = ({ id, title, poster, type }) => {
    return (

        <div className='image-container d-flex justify-content-start m-4'>
            <Link to={`${type}/${id}`}>
                <img className='movieposter' alt='movie' src={poster}></img>
            </Link>
        </div>
    )
}

export default DisplayItem
