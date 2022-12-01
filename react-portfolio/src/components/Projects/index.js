import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers'
import image from '../../assets/large/coffee.jpeg'

function Projects(props) {
  const currentProject = {
    name: "Project 1", 
    description: "A coffee shop website where the user chooses their drink based on a series of questions"
  }

  return(
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.name}</p>
      <div className="flex-row">
        <img 
        src={image}
        alt="Coffee Example"
        className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Projects; 