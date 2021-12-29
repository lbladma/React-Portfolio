
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
             <p> <marquee width='100%'> Thank you for visiting my Portfolio</marquee>
                    </p>
            </div>
            
        </div>
        
    );
}

export default Contactpage;

