import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Product";
import About from "./About";
import Contact from "./Contact";
import Readmore from "./Readmore";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/readmore" element={<Readmore />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
