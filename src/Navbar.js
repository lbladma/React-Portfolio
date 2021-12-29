import React from 'react'
import Resume from './resume.pdf';

const Navbar = () => {
    
    return (
        <div className="navbar">
            <h1></h1>
            <nav className="links">
                 <a href ="#groupprojectspage">Group Projects</a>
                <a href ="#projectpage">My Projects</a>
                
                <a href ="#skillpage">Tools and Technologies</a>
                <a href ={Resume}>My Resume</a>
                <a href ="https://www.linkedin.com/in/taoufika/">My LinkedIn</a>
                <a href ="https://github.com/lbladma">My GitHub</a>
                <a href ="#contactpage">Contact Me</a>
            </nav>
            
        </div>
    );
}

export default Navbar;