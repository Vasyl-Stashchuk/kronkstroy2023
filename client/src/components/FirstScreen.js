import React from 'react';
import '../css/WtfNav.css';
import logo from '../assets/Kronk.svg';  // Імпортуємо зображення для відображення рейтингу.

const FirstScreen = () => {
    return (
        <div className="first-screen">

            <img className="d-flex "
            src={logo}
            />
            
        </div>
    );
};

export default FirstScreen;