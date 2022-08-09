import React from 'react'
import {useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Searchbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
       // navigate(`/media/${search}`)

      };
      const handleSubmit = event => {
        event.preventDefault();
    
        navigate(`/media/${search}`);
      };

      useEffect(()=>{
        setSearch("");
        
      },[]);

    return (
        <div>
            <form className="form-inline mx-auto" onSubmit={handleSubmit}>
                <input className="form-control mx-auto" type="search" placeholder="Search" aria-label="Search"
                value={search} onChange={handleChange} />
                <button className='btn' type="submit">search</button>
            </form>
        </div>
    )
}

export default Searchbar
