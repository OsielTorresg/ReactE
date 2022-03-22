import React from "react";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
// import Slider from "./Components/Slider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./Drinks.css";
import "./Contact.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Slider /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>

        {/* <Drinks /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/Drinks" element={<Drinks />}></Route>
//           <Route path="/Contact" element={<Contact />}></Route>
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
// function App() {
//   return (
//     <Router>
//     <div>

//         <Header />
//         <Routes>
//           <Route  path="Home.html" element ={<Home/>} /> </Route>
//           <Route  path="/drinks.html" element={<Drinks/>} > </Route>
//           <Route  path="/Contact.html" element={<Contact/>} > </Route>
//         </Routes>
//         <Footer />

//     </div>
//     </Router>
//   );
// }
