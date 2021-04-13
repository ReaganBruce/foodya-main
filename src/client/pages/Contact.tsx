import * as React from "react";
import "../scss/contact";

const Contact: React.FC<IContact> = () => {
  return (
    <>
      <main className="container">
        <section className="row">
          <div
            id="user-register-container"
            className="col-md-12 d-flex justify-content-center"
          >
            <div id="user-register-div" className="row">
              <div id="user-register-title">
                <h4 id="foodya-register">FoodYA!</h4>
              </div>

              <div >
                <form id="contact-form">
                  <div>
                    <label id="contact-us">Contact US</label>
                  </div>
                  <ul>
                  
                  <h4 id="email">  email:foodya@gmail.com</h4>
                  <div>
                    <h4 id="phone">Phone:205-335-1457</h4>
                  </div>
                  <h4 id="address">Address:3605 Doe Lane</h4>
                  
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface IContact {}

export default Contact;
