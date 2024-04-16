import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Agalya</h2>
        <div className="prompt">
          <p> A Frontend Developer with a passion for creating and designing</p>
        </div>
        <h3 className="work">I like to craft solid and scalable frontend products with great user experience</h3>
        <div className="icon-container">
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Technical Skills</h2>
            <span>
              Web Development, Responsive Design, CSS Frameworks/Libraries,
              JavaScript Frameworks/Libraries, UI/UX Design
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>C, C++, HTML, CSS, JavaScript, Bootstrap 5, React</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
