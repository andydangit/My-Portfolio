import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
        <nav className="navbar">
        <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            My Portfolio <i class="fab fa-adn"></i>
        </Link>
        </div>
        </nav>
        </>
    )
}

export default Navbar
