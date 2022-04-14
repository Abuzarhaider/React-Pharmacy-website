import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    userFname: "",
    userEmail: "",
    userNumber: "",
    userMessage: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${data.userFname}   Phone: ${data.userNumber}   Email: ${data.userEmail}`)
  };

  return (
    <>
      {/*=======================
        Main text(Contact Us)
      ========================*/}
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      {/*==========
        Form Start
      =============*/}
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 pb-5 col-10 mx-auto">
            {/*=======================
              User Full Name
              ========================*/}
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="userFname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userFname"
                  name="userFname"
                  value={data.userFname}
                  onChange={InputEvent}
                  placeholder="Enter Full Name"
                  required
                />
              </div>
              {/*=======================
                User Email address
                ========================*/}
              <div className="mb-3">
                <label for="userEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="userEmail"
                  value={data.userEmail}
                  onChange={InputEvent}
                  placeholder="text@example.com"
                />
              </div>
              {/*=======================
                User Phone Number
                ========================*/}
              <div className="mb-3">
                <label for="userNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="userNumber"
                  name="userNumber"
                  value={data.userNumber}
                  onChange={InputEvent}
                  placeholder="Enter your number"
                  required
                />
              </div>
              {/*=======================
                User Message/Description
                ========================*/}
              <div className="mb-3">
                <label for="userMessage" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="userMessage"
                  rows="3"
                  name="userMessage"
                  value={data.userMessage}
                  onChange={InputEvent}
                ></textarea>
              </div>

              {/*=============
              Submit Button
              ==============*/}
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {/*================
              Submit Button End
              =================*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
