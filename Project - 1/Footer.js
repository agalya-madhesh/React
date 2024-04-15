import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <p> &copy; 2024 myportfolio.com</p>
    </div>
  );
}

export default Footer;
