import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <section id="about">
        <h2>About Me</h2>
        <p>This is a brief introduction about myself.</p>
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
