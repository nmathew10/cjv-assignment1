import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import UserProfileContent from './UserProfileContent'

const UserProfile = () => {
    return (
        <div>
            <Header />

            <body>
                <UserProfileContent />
            </body>

            <Footer />
        </div>

    )
}

export default UserProfile
