import React from 'react'
import { Link } from "react-router-dom";
import "../assets/css/LoginContent.css"

const SignupContent = () => {
    return (
        <form>
            <div class="container_register">
                <div class="padding">
                    <h1> Registration </h1>
                    <br />
                    <br />

                    <label>
                        Full Name
                    </label>
                    <br />
                    <input type="text" class="textbox" name="name" placeholder="First Name" required />
                    <br />
                    <br />

                    <label>
                        Email ID
                    </label>
                    <br />
                    <input type="text" class="textbox" placeholder="Enter email ID" name="email" required />
                    <br />
                    <br />

                    <label>
                        Enter Password
                    </label>
                    <input type="text" class="textbox" placeholder="Enter Password" name="pass" required />
                    <br />
                    <br />

                    <label>
                        Re-enter Password
                    </label>
                    <input type="text" class="textbox" placeholder="Enter Re-enter" name="reenter" required />
                    <br />
                    <br />
                    <br />

                    <button type="submit" class="button-login">Register</button>
                    <br />
                    <br />

                    <Link to="/">
                        <button type="button" class="button-Register"> Cancel</button>
                        <br />
                    </Link>

                </div>
            </div>
        </form>
    )
}

export default SignupContent
