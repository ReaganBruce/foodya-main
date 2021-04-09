import React, { useState, useEffect } from "react";
import { isParenthesizedTypeNode } from "typescript";
import "../scss/vendorProfile";

const VendorProfile: React.FC<IVendorProfile> = () => {
  const [getBusiness, setGetBusiness] = useState([]);
  const [getReviews, setGetReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res: Response = await fetch("http://localhost:3000/api/business");
        const getBusiness = await res.json();
        setGetBusiness(getBusiness);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res: Response = await fetch("http://localhost:3000/api/reviews");
        const getReviews = await res.json();
        setGetReviews(getReviews);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <main id="profile-container" className="container">
        <section className="row">
          {getBusiness.map((business) => (
            <div id="business-column" className="col-12">
              <div key={`business-card-${business.id}`}>
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title">{business.name}</h5>
                    <hr className="border border-primary"></hr>
                    <h6 className="card-text text-muted">{business.phone}</h6>

                    <h6 className="card-text text-muted">{business.address}</h6>
                    <h6 className="card-text text-muted">{business.city}</h6>
                    <h6 className="card-text text-muted">{business.zipcode}</h6>
                    <h6 className="card-text text-muted">
                      {`open:`}
                      {business.start}
                      {`-`}
                      {business.end}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {getReviews.map((reviews) => (
            <div id="review-column" className="col-12">
              <div key={`review-card-${reviews.id}`}>
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h3>Reviews</h3>
                    <h5 className="card-title">{reviews.name}</h5>
                    <hr className="border border-primary"></hr>
                    <h6 className="card-text text-muted">{reviews.username}</h6>
                    <h6 className="card-text text-muted">{reviews.content}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

interface IVendorProfile {}

export default VendorProfile;

{
  /* <main id="vendor-container" className="container">
<div id="vendors-row" className="col-12 d-flex justify-content-center">
  <div id="vendors-div" className="row"></div>
  <div className="d-flex"></div>

  {getBusinesess.map((business) => (
    <div key={`business-card-${business.id}`}>
      <h3 id="rectangle-15" className="d-flex justify-content-center"></h3>
        <div className="card">
          <h5 className="card-header">Favorites</h5>
          <div className="card-body">
            <h5 className="card-title">{business.phone}</h5>
            <p className="card-text">{business.location}</p>
          </div>
        </div>
        {/* {business.name}
        {business.id}
        {business.phone}
        {business.location}
        {business.address}
        {business.start} */
}
//     </div>
//   ))}
// </div>
// </main> */}

/*{ <main className="vendor-container">
<section className="row">
    <div className="col-12">
    <div className="container px-9">
  <div className="row gx-3">
    <div className="col">
      <div className="vendor-p-3-border-bg-light">{`Vendor`}</div>
    </div>
    <div className="col">
      <div className="business-p-3 border bg-light">{`getBusiness`}</div>
    </div>
  </div>
  {getBusinesess.map(location => (
                        <div key={`business-card-${business.id}`}>
                           <div key={`business-card-${location.id}`}>   
                            <h1 className=" d-flex justify-content-center">
                                {business.name}
                                
</div>

    <div className="card-body">{`business. :`}</div>
    <div className="card-body">{`phone :`}</div>
                        </div>
                        <div className="card">
  <h5 className="card-header">Favorites</h5>
  <div className="card-body">
    <h5 className="card-title">Vendor 1</h5>
    <p className="card-text">Address</p>
  </div>
</div>
</section>
</main> */ //
