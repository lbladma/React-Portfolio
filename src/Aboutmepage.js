import React from 'react'
const AboutMePage = () => {
    return (
        <div className="aboutmepage">
            {/* This is info section  */}
            <div className="infosection">
                <h2><u>
                    About me</u></h2>
                    
                    <br>
                    </br>
                   
                    <p><b><i>
                        My name is Taoufik... I am  </i></b>
                        </p> 
                     <hr>
                    </hr>
                <br/><br/>
                <p> <marquee width='250%'>
                     <br></br>
                - A nerd/Technology enthusiast.
                <br></br>
                - A  Full Stack Web Developer  
                <br></br>
                - A Senior computer engineer/system admin.
                <br></br>
                - An Aspiring CyberSecurity professional 
                <br></br> 
                - Computer Science BA degree 
                <br></br>
                - 10+ years experience working in IT 
                    </marquee>
                    </p>
            </div>
            {/* This is the image section */}
            <div className="imagesection">

            </div>
        </div>
    );
}

export default AboutMePage;