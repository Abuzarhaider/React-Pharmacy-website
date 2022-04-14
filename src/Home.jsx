import React from "react";
import Common from "./Common"
import web from "../src/Images/home_anim.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Common h1="Live to the fullest with" h2="Dedicated to health and wellness" imgsrc={web} visit="/service" btname="Get Started"/>
    </>
  );
};

export default Home;
