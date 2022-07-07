import React from 'react'
import "../assets/css/LoginContent.css"
import { Link } from "react-router-dom";

const LoginContent = () => {

  return (

    <form>
      <div class="login-container">
        <div class="padding">
          <h1> Login </h1>
          <br />
          <br />
          <label class="label" >Username </label>
          <input type="text" class="textbox" placeholder="Enter Username" name="username" required />
          <br />
          <br />
          <label>Password </label>
          <input type="password" class="textbox" placeholder="Enter Password" name="password" required />
          <br />
          <br />
          <button type="submit" class="button-login">Login</button>
          <br />
          <br />
          <Link to="/signup">
            <button type="button" class="button-Register"> Register</button>
          </Link>
          <br />
          <br />Forgot <a href="#"> password? </a>
        </div>
      </div>
    </form>

  )

}

export default LoginContent