import React from 'react'
import RehabImg from './images/rehab.jpg'
import WeatherImg from './images/weather.jpg'
import QuizImg from './images/quiz.jpg'
import LocalImg from './images/local.jpg'
import PortfolioImg from './images/portfolio.png'
import PlanImg from './images/planner.jpg'


const ProjectPage = () => {

    const projectList = [
        { id: 1, name: "Rehab", github:"https://warm-hamlet-41451.herokuapp.com/", image: RehabImg },
        { id: 2, name: "Weather App", github:"https://lbladma.github.io/Weather-Dashboard-App/", image: WeatherImg },
        { id: 3, name: "Quiz Project", github:"https://lbladma.github.io/JS_Quiz_Project/", image: QuizImg },
        { id: 4, name: "I am feeling App", github:"https://lbladma.github.io/Project1-Interactive-Web-APP/", image: LocalImg },
        { id: 5, name: "Planner", github:"https://lbladma.github.io/Work-Day-Planner-App/", image: PlanImg },
        { id: 6, name: "My Portfolio", github:"https://lbladma.github.io/My_Portfolio/index.html", image: PortfolioImg },
    ];

    return (
        <div className="projectpage" id="projectpage">
            <h1> My Projects</h1>
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