import React from 'react'

import WeatherImg from './images/weather.jpg'
import QuizImg from './images/quiz.jpg'

import PortfolioImg from './images/portfolio.png'
import PlanImg from './images/planner.jpg'

import FitnessImg from './images/Fitness.png'
import EcommerceImg from './images/ecommerce.png'
import TeamImg from './images/team.png'
import ReduxImg from './images/reduxstore.png'
import BookImg from './images/book.png'



const ProjectPage = () => {

    const projectList = [
 
       
         { id: 6, name: "My Portfolio", github:"https://lbladma.github.io/My_Portfolio/index.html", image: PortfolioImg },
        { id: 2, name: "Weather App", github:"https://lbladma.github.io/Weather-Dashboard-App/", image: WeatherImg },
        { id: 3, name: "Coding Quiz App", github:"https://lbladma.github.io/JS_Quiz_Project/", image: QuizImg },
        { id: 5, name: "Work Day Planner", github:"https://lbladma.github.io/Work-Day-Planner-App/", image: PlanImg },
        { id: 6, name: "Fitness Tracker App", github:"https://lit-caverns-99318.herokuapp.com/", image: FitnessImg },
         { id: 6, name: "Ecommerce App", github:"https://drive.google.com/file/d/1YqNLR55ZHjhxBJ4ibVplYZ-ckzhMDN2w/view", image: EcommerceImg },
         { id: 6, name: "Book Search App", github:"https://fast-depths-80373.herokuapp.com/", image: BookImg },
         { id: 6, name: "Redux Store App", github:"https://mighty-cliffs-94022.herokuapp.com/", image: ReduxImg },
         { id: 6, name: "Team Profile App", github:"https://www.awesomescreenshot.com/video/5846892?key=80e437fceb82bb7f307944b672988c8d", image: TeamImg },
    ];
    

    return (
        <div className="projectpage" id="projectpage">
            <h1> <u><i>
               My Projects</i></u></h1>
                
            <div className="projectcardlist">

                {projectList.map((projectList) => (
                    
                    <div className="card">
                        
                        <div className="cardimage">
                            <img src={ projectList.image } alt=""></img>
                        </div>
                        <div className="cardinfo" key={ projectList.id }>
                            <a href={ projectList.github }> { projectList.name }</a>
                        </div>
                        
                    </div>
                    
                ))}

            </div>
            
        </div>
        
        
    );
    
}



export default ProjectPage;




