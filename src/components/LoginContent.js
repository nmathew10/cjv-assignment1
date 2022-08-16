import React from 'react'
import "../assets/css/LoginContent.css"
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';

const LoginContent = () => {

  const [user, setUser] = useState({

    username: "",
    password: ""
  });
  const [userId, setUserId] = useState([]);

  const navigate = useNavigate();

  const submitForm = (e) => {

    e.preventDefault();


    fetch("https://digital-video-store-api.herokuapp.com/auth", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(user)
    })  //fetch(API_URL + "/tvshows") 
      .then((res) => {

        return res.json()
      })
      .then(json => {
        
        //setUserId(json.body[0]);
        console.log(userId)
        localStorage.setItem("currentUser", JSON.stringify(json.body[0]));
        navigate(`/user/${json.body[0]}`);
        alert("Logged in successfully!")
      })
      .catch((err) => {
        alert("something wrong!")
        console.log(`Error ${err}`);
      });

  }

  return (

    <form action="/" method="POST" onSubmit={submitForm}>
      <div className="login-container">
        <div className="padding">
          <h1> Login </h1>
          <br />
          <br />
          <label className="label" >Username </label>
          <input type="text" className="textbox" placeholder="Enter Username" name="username" required
            value={user.username} onChange={(event) => {
              setUser({
                ...user,
                username: event.target.value
              });

            }} />
          <br />
          <br />
          <label>Password </label>
          <input type="password" className="textbox" placeholder="Enter Password" name="password" required 
          value={user.password} onChange={(event) => {
            setUser({
              ...user,
              password: event.target.value
            });

          }}/>
          <br />
          <br />
          <button type="submit" className="button-login">Login</button>
          <br />
          <br />
          <Link to="/signup">
            <button type="button" className="button-Register"> Register</button>
          </Link>
        </div>
      </div>
    </form>

  )

}

export default LoginContent