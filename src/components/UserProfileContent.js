import React from 'react'
import "../assets/css/LoginContent.css"
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const UserProfileContent = () => {



    const [ user, setUser ] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    });


    const { id } = useParams();


    useEffect(() => {

        fetch(`https://digital-video-store-api.herokuapp.com/users/${id}`)
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setUser(json.body[0]);
                
            })
            .catch((err) => {
                console.log(`Error ${err}`);

            })
    }, [])


    return (
        <div>
            <div className="user-container">
                <div className="padding">
                    <FaUser size={170} />
                    <br />
                    <br />
                    <h1> {user.firstName} {user.lastName} </h1>
                    <br />
                    <br />
                    <p>email: {user.email}</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileContent
