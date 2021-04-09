import * as React from "react";

const Contact: React.FC<IContact> = () => {
  return (
    <>
      <main className="container-contact">
        <section className="row">
          <div className="col-12">
            <h1 className="text-center">Foodya logo Nav bar Contact !</h1>
          </div>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Vendor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                favourite
              </a>
            </li>
          </ul>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Contact Us</h5>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="eamil"
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Address"
                  />
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <button type="button" className="btn btn-primary btn-sm">
                    {" "}
                    button
                  </button>
                </div>
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
