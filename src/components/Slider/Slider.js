import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./slider.css";
const slideImages = [
  {
    url: "images/slider4.jpg",
  },
  {
    url: "images/slider1.png",
  },
  {
    url: "images/slider2.png",
  },
  {
    url: "images/slider3.png",
  },
];
const Slider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {/* using the map function to return the objects index value from slideImages */}
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              {/* <h3 className="slider-text">Digital Abstract Art</h3> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slider;
// import React, { useState } from "react";
// import "./Slider.css";
// //import BtnSlider from './Btnslider
// import DataSlider from "./dataSlider";

// export default function Slider() {
//   const [slideIndex, setSlideIndex] = useState(1);

//   const nextSlide = () => {
//     if (slideIndex !== DataSlider.length) {
//       setSlideIndex(slideIndex + 1);
//     } else if (slideIndex === DataSlider.length) {
//       setSlideIndex(1);
//     }
//   };
//   const prevSlide = () => {
//     if (slideIndex !== 1) {
//       setSlideIndex(slideIndex - 1);
//     } else if (slideIndex === 1) {
//       setSlideIndex(DataSlider.length);
//     }
//     const moveDot = (index) => {
//       setSlideIndex(index);
//     };
//   };
//   return (
//     <div className="container-slider">
//       {DataSlider.map((obj, index) => {
//         return (
//           <div
//             key={obj.id}
//             className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
//           >
//             <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1} .jpg`} />
//           </div>
//         );
//       })}
//       <BtnSlider moveSlide={nextSlide} direction={"next"} />
//       <BtnSlider moveSlide={prevSlide} direction={"prev"} />
//       <div className="container-dots">
//         {Array.from({ length: 5 }).map((item, index) => (
//           <div
//             onClick={() => moveDot(index + 1)}
//             className={slideIndex === index + 1 ? "dot active" : "dot"}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
