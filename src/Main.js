import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div class="container">

    <main className="main">
      <section id="about">
        <p>hi! my name is <b>Frances Zhao</b> i am currently a first-year systems design engineering student
            at the <a href="https://uwaterloo.ca/future-students/programs/systems-design-engineering" target="_blank" rel="noopener noreferrer"> University of Waterloo</a>.
        </p>
        <p>
            i am an aspiring designer with two big dreams:<br></br>
            1. merging <b>design, art, and engineering</b> to create both impactful and 
            innovative solutions.<br></br> 2. raising a tank of guppies...
        </p>
        <p>
            my technical skills lies in the field of design and programming, with experience with 
            <b> Adobe Suite, Ms Office, Solidworks, Procreate, and Figma,</b> and proficiency in <b>C++, Java, 
              Python, HTML/CSS, and Javascript. </b>
        </p>
        <div className={`show-more-content ${showMore ? 'show' : ''}`}>
          <p>
            Additional content goes here. You can add more details about yourself, your interests, or anything else you want to share.
          </p>
        </div>
        <button onClick={handleReadMore}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at myemail@example.com.</p>
      </section>
    </main>
    </div>
  );
};

export default Main;