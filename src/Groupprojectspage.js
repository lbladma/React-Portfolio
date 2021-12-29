import React from 'react'
import RehabImg from './images/rehab.jpg'
import LocalImg from './images/local.jpg'
import VodUImg from './images/VodU.png'



const Groupprojectspage = () => {

    const projectList = [
        { id: 6, name: "VodU App", github:"https://vodu2.herokuapp.com/", image: VodUImg }, 
        { id: 1, name: "Rehab App", github:"https://warm-hamlet-41451.herokuapp.com/", image: RehabImg },
        { id: 4, name: "I am feeling App", github:"https://lbladma.github.io/Project1-Interactive-Web-APP/", image: LocalImg },
 ];
    

    return (
        <div className="projectpage" id="groupprojectspage">
            <h1> <u><i>
               Group Projects</i></u></h1>
                
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

export default Groupprojectspage;