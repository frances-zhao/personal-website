import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <section id="about">
        <p>hi! i am currently a first-year systems design engineering student
            at the <a href="https://uwaterloo.ca/future-students/programs/systems-design-engineering" target="_blank"> University of Waterloo</a>.
        </p>
        <p>
            i am an aspiring designer interested in merging <b>design, art, and engineering</b> to create both impactful and 
            innovative solutions, and raising a tank of guppies...
        </p>
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
  );
}

export default Main;
