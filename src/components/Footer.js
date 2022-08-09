import React from 'react'
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram, } from "react-icons/bs";
import {Box, Container, Row, Column, FooterLink} from "../components/styleComponents/FooterStyle";

const Footer = () => {
    return (
        <footer>
            <div className='pagefooter'>
                <div className='footercontents'>
                    <Box>
                        <h1 className='logo'>
                            StreamNow
                        </h1>
                        <br />
                        <Container>
                            <Row>
                                <Column>
                                    <FooterLink href="#">About us</FooterLink>
                                    <FooterLink href="#">Media Center</FooterLink>
                                    <FooterLink href="#">Contact us</FooterLink>
                                </Column>
                                <Column>
                                    <FooterLink href="#">Jobs</FooterLink>
                                    <FooterLink href="#">Cookie preferences</FooterLink>
                                    <FooterLink href="#">Terms of use</FooterLink>
                                </Column>
                                <Column>

                                    <div className='socialmedias'>
                                        <a href="https://www.youtube.com/"
                                            className="yt">
                                            <BsYoutube />
                                        </a>
                                        <a href="https://www.facebook.com/"
                                            className="fb">
                                            <BsFacebook />
                                        </a>
                                        <a href="https://www.twitter.com/" className="twit">
                                            <BsTwitter />
                                        </a>
                                        <a href="https://www.instagram.com/"
                                            className="insta">
                                            <BsInstagram />
                                        </a>
                                    </div>
                                </Column>
                            </Row>
                        </Container>
                    </Box>
                </div>

            </div>
        </footer>
    )
}

export default Footer
