
import React from 'react'

const Contactpage = () => {

    return (
        <div className="contactpage" id="contactpage">
            
            <div className="formsection">
                <h2><i><u>
                    Questions or Feedback
                    </u>
                    </i>
                </h2>
                <form className="form">
                    <label />Name:
                    <input type="text" required />
                    <label />E-Mail:
                    <input type="text" required />
                    <label />Phone #:
                    <input type="text" required />
                    <label />Comment/Feedback:
                    <textarea type="text" required />
                </form>
            </div>
            <div className="contactsection">

                <br/>
                <br/>
                <div className="sociallinks">
                     <a href="mailto:toufikaminew@gmail.com">Email</a>
                     <a href="https://github.com/lbladma">GitHub</a>
                    <a href="https://www.linkedin.com/in/taoufika/">LinkedIn</a>
                    <a href="blank">Instagram</a>
                    <a href="blank">Snapchat</a>
                   
                </div>
            </div>
            
        </div>
        
    );
}

export default Contactpage;

