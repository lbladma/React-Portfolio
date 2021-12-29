import React from 'react'

import AboutMePage from "./Aboutmepage";
import Contactpage from "./Contactpage";
import ProjectPage from "./Projectpage";
import GroupprojectsPage from "./Groupprojectspage";
import Skillspage from "./Skillspage";


const Homepage = () => {
    
    return (
        <div className="homepage">
            <AboutMePage />
            <GroupprojectsPage />
            <ProjectPage />
            <Skillspage />
            <Contactpage />
             
        </div>
    
    );


}

export default Homepage
