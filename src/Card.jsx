import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      {/*=======================
        Cards Start
      ========================*/}
      <div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Price: {props.price}</p>
            <NavLink to="#" className="btn btn-primary">
              Buy
            </NavLink>
          </div>
        </div>
      </div>
      {/*=======================
        Card End
      ========================*/}
    </>
  );
};

export default Card;
