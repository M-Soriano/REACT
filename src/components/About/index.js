import React from 'react'
import coverImage from "../../assets/cover/IMG_4721.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
         
          <h1>
          Hi, My name is Miguel Soriano.
          </h1>

          <h3>list of projects</h3>
          <h3 > <a href="https://m-soriano.github.io/run-buddy/"> Runbuddy</a></h3>
          <h3 > <a href="https://triciaax.github.io/Wine-and-Dine/"> Wine-and-Dine</a></h3>
          <h3 > <a href="https://github.com/wagnergabe/Wandrlust">Wandrlust repository</a></h3>



         

          
      </p>
      </div>
    </section>
  )
}

export default About