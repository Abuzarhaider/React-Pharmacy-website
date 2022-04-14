import React from "react";
import web from "../src/Images/home_anim.png";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                {/* Text Home */}
                <div className="col-md-6 pt-5 pt-lg-5 pb-5 pb-lg-5 mx-auto order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1> {props.h1} <strong className="brandName-home">Pharma+</strong></h1>
                  <h2 className="my-3">{props.h2}</h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary rounded-pill btn-home">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>


                {/* Image Portion */}
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Patient visiting pharmacy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;