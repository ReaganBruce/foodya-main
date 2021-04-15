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
            <div className="row d-flex justify-content-center custom-card3">
              <div className="col-12">
                <h4 id="foodya-register" className="col-12 padding-b">FoodYA!</h4>
              </div>

              <div >
                <form >
                  <div>
                  </div>
                  <div className="height-info d-flex flex-wrap align-items-center">
                  <h4 className="text-center w-small-quicksand-text col-12">Email: foodya@gmail.com</h4>
                  <h4 className="text-center w-small-quicksand-text col-12">Phone: 205-335-1457</h4>
                  <h4 className="text-center w-small-quicksand-text col-12">Address: 3605 Doe Lane</h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface IContact { }

export default Contact;
