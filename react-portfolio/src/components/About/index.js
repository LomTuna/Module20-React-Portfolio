import React from 'react'
import coverImage from "../../assets/cover/self-portrait-1.jpeg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage}  className="my-2"  alt="cover" />
      <div className="my-2">
        <p>
          An up-and-coming Web Developer, who's tackled the MERN stack challenges head on! 
      </p>
      </div>
    </section>
  )
}

export default About