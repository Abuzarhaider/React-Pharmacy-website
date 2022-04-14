import React from "react";
import Common from "./Common"
import web from "../src/Images/about_anim.png";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
    <Common h1="Welcome to About section of" h2="Pharma+ is the only pharmacy which provides its services all across the country and thats the..." imgsrc={web} visit="/readmore" btname="Read More"/>
    </>
  )
};
export default About;