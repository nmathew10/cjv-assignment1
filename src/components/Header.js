import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav className='Nav'>
                <Link className="NavLink logo" to='/home'>
                    StreamNow
                </Link>
                
                <div className='NavMenu'>
                    <Link className="NavLink" to='/movies-and-tv'>
                        Movies/TV Shows
                    </Link>
                    <Link className="NavLink" to='/signup'>
                        Sign Up
                    </Link>
                </div>
                <nav className='NavBtn'>
                    <Link className='NavBtnLink' to='/signin'>Sign In</Link>
                </nav>
            </nav>
        </header> 
    )
}

export default Header





