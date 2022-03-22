import React from "react";
class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <a href="/">
          <img className="logo" src="./images/Logo.png" alt="logo" />{" "}
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a className="active" href="/">
                HOME
              </a>
            </li>
            <li>
              <a href="/drinks">PRODUCTS</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
            <li>
              <a href="/cart">
                <span className="ti-shopping-cart"></span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default Header;
