import React from 'react'
import { Link } from "react-router-dom";
import Searchbar from './Searchbar';
import { useState, useEffect } from 'react';

const Header = () => {

    const [userId, setUserId] = useState();

    useEffect(() => {
        
        if (localStorage.getItem("currentUser") !== null && localStorage.getItem("currentUser") !== 'undefined') {
            setUserId(JSON.parse(localStorage.getItem("currentUser")));
        }
    }, []);

    return (
        <header>
            <nav className='Nav'>
                <Link className="NavLink logo" to='/'>
                    StreamNow
                </Link>

                <div className='NavMenu'>
                    <Link className="NavLink" to='/movies-and-tv'>
                        Movies/TV Shows
                    </Link>
                    <Link className="NavLink" to='/signup'>
                        Sign Up
                    </Link>

                    <Searchbar />

                    <div>
                    <Link className="NavLink" to={JSON.parse(localStorage.getItem("currentUser")) === undefined || localStorage.getItem("currentUser") === null ?'/signin' :`/user/${JSON.parse(localStorage.getItem("currentUser"))}`}>
                            User Profile
                        </Link>
                    </div>


                </div>
                <nav className='NavBtn'>
                    <Link className='NavBtnLink' to='/signin'>Sign In</Link>
                </nav>
            </nav>
        </header>
    )
}

export default Header





