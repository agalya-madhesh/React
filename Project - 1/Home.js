import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Agalya</h2>
        <div className="prompt">
          {" "}
          <p> A Frontend Developer with a passion for creating and designing</p>
        </div>
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Technical Skills</h2>
            <span>
              Responsive Design, CSS Frameworks/Libraries, JavaScript
              Frameworks/Libraries, UI/UX Design
            </span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>HTML, CSS, JavaScript, Bootstrap 5, React</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
