import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Hero.css";

function Hero() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="heroSection">
                <h1 className="heroText">Sign Up On the Latest Movies!</h1>
            </div>
        </div>
    );
}

export default Hero;