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
            <img
              src="https://www.saqramart.com/resources/upload/products/thumbnail2/4902443525385.jpg"
              alt=""
            />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">LIMITED</button>
            </a>
          </div>
          <div class="fe-box">
            <img
              src="https://cdn.shopify.com/s/files/1/0338/0694/2253/products/KitkatMiniPistachioWafers3.84oz_108.9g__front_900x.jpg?v=1646677290"
              alt=""
            />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">SOLD OUT</button>
            </a>
          </div>
          <div class="fe-box">
            <img
              src="https://cdn.shopify.com/s/files/1/0338/0694/2253/products/CalbeeMyPotePotatoChips-GarlicHerbButter2.12oz_60g__front_360x.jpg?v=1646405627"
              alt=""
            />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">FREE SHIPPING</button>
            </a>
          </div>
        </section>

        <section id="feature" class="section-p1">
          <div class="fe-box">
            <img
              src="https://cdn.shopify.com/s/files/1/0338/0694/2253/products/Alfonso_sHotChocolateTablets7.05oz_Front_360x.jpg?v=1624991026"
              alt=""
            />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">FREE SHIPPING</button>
            </a>
          </div>
          <div class="fe-box">
            <img
              src="https://cdn.shopify.com/s/files/1/0338/0694/2253/products/OceanBombDragonBallZGokuSparklingWater-OrangeFlavor11.15oz_front_360x.jpg?v=1623959462"
              alt=""
            />
            <a class="active" href="/Drinks">
              {" "}
              <button class="normal">LIMITED</button>
            </a>
          </div>
          <div class="fe-box">
            <img
              src="https://cdn.shopify.com/s/files/1/0338/0694/2253/products/GlicoPockyBiscuitSticks-Cookies_Cream2.47oz_Front_360x.jpg?v=1603996856"
              alt=""
            />
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
