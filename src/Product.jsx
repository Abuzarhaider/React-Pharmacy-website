import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Product = () => {
  return (
    <>
      {/*=======================
        Main title (Our Products)
      ========================*/}
      <div className="my-5">
        <h1 className="text-center">Our Products</h1>
      </div>

      {/*=======================
        Cards main divs
      ========================*/}
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {/*=======================
                Cards main code
              ========================*/}
            <div className="row gy-3">
              {
                Sdata.map((val, ind)=>{
                  return <Card key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  price={val.price}
                  />
                })
              }
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
