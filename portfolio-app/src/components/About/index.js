import React from 'react';
import photo from "../../assets/images/avatar.jpg";


function About() {
  return (
    <section>
      <h2 id="about">About me</h2>
      <img
            src={photo}
            alt="Avatar"
            className="avatar"
          />
          <div>
            <p>I am full stack developer with 5+ years in the industry working for various clients and helped build customer facing user interactive websites. 
                    Experienced in writing Javascript, HTML, CSS, deploying the applications using Git. 
                    Most of my positions utilized agile-like development processes using Jira.</p>
          </div>
    </section>
  );
}

export default About;