import React from 'react'
import { Link } from "react-router-dom";
import "../assets/css/LoginContent.css"
import { useState } from 'react';

const SignupContent = () => {

    const [users, setUsers] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        username:"",
        password: ""
    });

    const submitForm = (e) => {

        e.preventDefault();


        fetch("https://digital-video-store-api.herokuapp.com/users", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(users)
        }
        )  //fetch(API_URL + "/tvshows") 
            .then((res) => {

                return res.json()
            })
            .then(json => {
                alert("User created successfully!")
                setUsers({
                    firstName: "",
                    lastName: "",
                    email: "",
                    username:"",
                    password: ""
                })
            })
            .catch((err) => {
                alert("something wrong!")
                console.log(`Error ${err}`);
            });

    }


    return (
        <form action="/" method="POST" onSubmit={submitForm}>
            <div className="container_register">
                <div className="padding">
                    <h1> Registration </h1>
                    <br />
                    <br />

                    <label>
                        First Name
                    </label>
                    <br />
                    <input type="text" className="textbox" id='Fname' name="Fname" placeholder="First Name" required
                        value={users.firstName} onChange={(event) => {
                            setUsers({
                                ...users,
                                firstName: event.target.value
                            });

                        }} />
                    <br />
                    <br />

                    <label>
                        Last Name
                    </label>
                    <br />
                    <input type="text" className="textbox" id='Lname' name="Lname" value={users.lastName} placeholder="Last Name" required
                        onChange={(event) => {
                            setUsers({
                                ...users,
                                lastName: event.target.value
                            });

                        }} />
                    <br />
                    <br />

                    <label>
                        Email ID
                    </label>
                    <br />
                    <input type="text" className="textbox" id='email' value={users.email} placeholder="Enter email ID" name="email" required
                        onChange={(event) => {
                            setUsers({
                                ...users,
                                email: event.target.value,
                                username: event.target.value
                            });

                        }} />
                    <br />
                    <br />



                    <label>
                        Enter Password
                    </label>
                    <input type="text" className="textbox" placeholder="Enter Password" name="pass" required />
                    <br />
                    <br />

                    <label>
                        Re-enter Password
                    </label>
                    <input type="text" className="textbox" id='password' value={users.password} placeholder="Enter Re-enter" name="reenter" required
                        onChange={(event) => {
                            setUsers({
                                ...users,
                                password: event.target.value
                            });

                        }} />
                    <br />
                    <br />
                    <br />

                    <button type="submit" className="button-login">Register</button>
                    <br />
                    <br />

                    <Link to="/">
                        <button type="button" className="button-Register"> Cancel</button>
                        <br />
                    </Link>

                </div>
            </div>
        </form>
    )
}

export default SignupContent
