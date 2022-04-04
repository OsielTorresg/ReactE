import React from "react";
import Slider from "../components/Slider/Slider";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <section id="banner" className="section-m1">
          <h2> Welcome To Exotic Japanese Snacks </h2>

          {/* <a class="active" href="/Drinks">
            {" "}
            <button class="normal">Explore More</button>
          </a> */}
        </section>
        <section id="feature" className="section-p1">
          <div className="fe-box">
            <img src="./images/Kik-Kat.jpeg" alt="" />
            <a className="active" href="/Drinks">
              {" "}
              <button className="normal">LIMITED</button>
            </a>
          </div>
          <div className="fe-box">
            <img src="./images/Cheetos.jpeg" alt="" />
            <a className="active" href="/Drinks">
              {" "}
              <button className="normal">SOLD OUT</button>
            </a>
          </div>
          <div className="fe-box">
            <img src="./images/Pringles.jpeg" alt="" />
            <a className="active" href="/Drinks">
              {" "}
              <button className="normal">FREE SHIPPING</button>
            </a>
          </div>
        </section>
        <Slider />
        <section id="feature" className="section-p1">
          <div className="fe-box">
            <img src="./images/Coke.jpeg" alt="" />
            <a className="active" href="/Drinks">
              {" "}
              <button className="normal">FREE SHIPPING</button>
            </a>
          </div>
          <div className="fe-box">
            <img src="./images/doritos.jpeg" alt="" />
            <a className="active" href="/Drinks">
              {" "}
              <button className="normal">LIMITED</button>
            </a>
          </div>
          <div className="fe-box">
            <img src="./images/Pocky.jpeg" alt="" />
            <a className="active" href="/Drinks">
              {" "}
              <button className="normal">SOLD OUT</button>
            </a>
          </div>
        </section>
        {/* <section id="hero">
          <h2>Exotic Japanese Snacks</h2>
          <a class="active" href="/Drinks">
            {" "}
            <button class="normal">SHOP </button>
          </a>
        </section> */}

        {/* <section id="feature" class="section-p1">
          <div class="fe-box">
            <img src="./images/LayesP.jpg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">LIMITED</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/JapSodaP.jpg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">SOLD OUT</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/SkittlesP.png" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">FREE SHIPPING</button>
            </a>
          </div>
        </section> */}

        {/* <section id="feature" class="section-p1">
          <div class="fe-box">
            <img src="./images/ShogunP.jpg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">FREE SHIPPING</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/Kik-katP.jpg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">LIMITED</button>
            </a>
          </div>
          <div class="fe-box">
            <img src="./images/BingP.jpg" alt="" />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">SOLD OUT</button>
            </a>
          </div>
        </section> */}
        <section id="banner" class="section-m1">
          <h2>CLICK TO SEE MORE! </h2>
          <a className="active" href="/Drinks">
            {" "}
            <button className="normal">Explore More</button>
          </a>
        </section>
      </>
    );
  }
}
export default Home;
