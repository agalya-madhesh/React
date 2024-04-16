import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
