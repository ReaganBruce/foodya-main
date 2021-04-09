import * as React from "react";

const VendorProfile: React.FC<IVendorProfile> = () => {






  return (
    <>
      <main className="container">
        <section className="row">
          <div className="col-12">
            <h1 className="text-center"> VendorProfile!</h1>
            <div className="container px-9">
              <div className="row gx-3">
                <div className="col">
                  <div className="p-3 border bg-light">Vendor</div>
                </div>
                <div className="col">
                  <div className="p-3 border bg-light">Business Name</div> 
                </div>
              </div>
            </div>
            <div className="card">
              <h5 className="card-header">Favorites</h5>
              <div className="card-body">
                <h5 className="card-title">Vendor 1</h5>
                <p className="card-text">Address</p>
              </div>
            </div>
            <div className="card">
              <h5 className="card-header">Reviews</h5>
              <div className="card-body">
                <h5 className="card-title">user</h5>
                <p className="card-text">Opinion</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface IVendorProfile {}

export default VendorProfile;
