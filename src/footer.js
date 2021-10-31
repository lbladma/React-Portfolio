
import React from 'react'
import footer from './footer';

const footer = () => {

    return (
        <div className="footer" id="footer">
            <div className="contactsection">
                <h2>Contact Me</h2>
                <p>Please reach out to me if you have any questions</p>
                <br/>
                <br/>
                <div className="info">
                    <a href="mailto:toufikaminew@gmail.com">Email</a>
                    <p>Phone #: (919) 589-2797</p>
                   
                </div>
                <br/>
                <br/>
                <div className="sociallinks">
                    <a href="https://github.com/lbladma">GitHub</a>
                    <a href="https://www.linkedin.com/in/taoufika/">LinkedIn</a>
                    <a href="">Instagram</a>
                    <a href="">Snapchat</a>
                </div>
            </div>

        </div>
    );
}

export default footer;