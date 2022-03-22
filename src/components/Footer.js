import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <footer className="media">
        <img className="social" src="./images/Logo.png" alt="My logo" />
        <a href="https://www.facebook.com">
          <img
            className="social"
            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_gray-512.png"
            alt="facebook"
          />{" "}
        </a>
        <a href="https://twitter.com/">
          <img
            className="social"
            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_gray-512.png"
            alt="twitter"
          />
        </a>

        <a href="https://www.instagram.com">
          <img
            className="social"
            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_gray-512.png"
            alt="instagram"
          />
        </a>
        <p>EJS</p>
      </footer>
    );
  }
}
export default Footer;
