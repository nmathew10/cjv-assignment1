import React from 'react'
import "../assets/css/LoginContent.css"
import Header from "./Header"
import Footer from "./Footer"
import SignupContent from './SignupContent'

const Signup = () => {
    return (
        <div>
            <Header />

            <body>
                <SignupContent />
            </body>

            <Footer />
        </div>

    )
}

export default Signup
