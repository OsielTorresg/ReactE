import React from "react";
import Slider from "../components/Slider/Slider";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Slider />
        {/* <section id="hero">
          <h2>Exotic Japanese Snacks</h2>
          <a class="active" href="/Drinks">
            {" "}
            <button class="normal">SHOP </button>
          </a>
        </section> */}

        <section id="feature" class="section-p1">
          <div class="fe-box">
            <img src="./images/Kik-Kat.jpeg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">LIMITED</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/Cheetos.jpeg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">SOLD OUT</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/Pringles.jpeg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">FREE SHIPPING</button>
            </a>
          </div>
        </section>

        <section id="feature" class="section-p1">
          <div class="fe-box">
            <img src="./images/Coke.jpeg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">FREE SHIPPING</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/doritos.jpeg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">LIMITED</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/Pocky.jpeg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">SOLD OUT</button>
            </a>
          </div>
        </section>
        <section id="banner" class="section-m1">
          <h2>CLICK TO SEE MORE! </h2>
          <a class="active" href="/Drinks">
            {" "}
            <button class="normal">Explore More</button>
          </a>
        </section>
      </>
    );
  }
}
export default Home;
