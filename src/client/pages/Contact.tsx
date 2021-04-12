import * as React from "react";
import "../scss/contact";

const Contact: React.FC<IContact> = () => {
  return (
    <>
      <div id="contact-container" className="row float-left">
        <div
          id="contact-sidebar"
          className="col-sm-2 justify-content-end flex-wrap m-0 pt-5"
        >
          <h3 className="ml-2 ">
            Our mission is to provide a way of getting the answers to the
            questions YOU have!
          </h3>
        </div>
        
       
        <div id="contact" className="col-md-10 mt-10">
          <div id="contact-card" className="card m-1 shadow h-90">
            <h5 className="card-title">Contact Us</h5>
            <input
              className="form-control form-control-bg"
              type="text"
              placeholder="Email"
            />
            <input className="form-control" type="text" placeholder="Address" />
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Phone Number"
            />
            <button id="button" className="btn-primary btn-sm">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface IContact {}

export default Contact;
