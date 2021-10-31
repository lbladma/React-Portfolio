import React from 'react'
import Resume from './resume.pdf';

const Navbar = () => {
    
    return (
        <div className="navbar">
            <h1></h1>
            <nav className="links">
                <a href ="#projectpage">My Projects</a>
                <a href ="#skillpage">Tools and Technologies</a>
                <a href ="#contactpage">Contact Us</a>
                <a href ={Resume}>My Resume</a>
            </nav>
        </div>
    );
}

export default Navbar;