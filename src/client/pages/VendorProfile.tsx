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
      <div id="profile-container" className="row justify-content-end">
        {getBusiness.map((business) => (
          <div id="business-column" className="col-12">
            <div key={`business-card-${business.id}`}>
              <div className="card shadow h-100">
                <div className="card-body">
                  <div
                    id="customers-row"
                    className="col-12 d-flex justify-content-center"
                  >
                    <div
                      id="about-customers-div"
                      className="row justify-content-start"
                    >
                      <h4 id="div-text-left">Vendor </h4>
                      <p id="about-customers-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                    <div
                      id="about-customers-div"
                      className="row justify-content-end"
                    ></div>
                    <li>
                      <h3 className="card-title">{business.name}</h3>

                      <h6 id="business" className="card-text ">
                        {business.phone}
                      </h6>
                      <h6 className="card-text ">{business.address}</h6>
                      <h6 className="card-text ">{business.city}</h6>
                      <h6 className="card-text">{business.zipcode}</h6>
                      <h6 className="card-text">
                        {`open:`}
                        {business.start}
                        {`-`}
                        {business.end}
                      </h6>
                    </li>
                  </div>
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
                  <div
                    id="about-customers-div"
                    className="row justify-content-start"
                  >
                    <h4 id="div-text-left">Reviews </h4>

                    <p id="about-customers-text"></p>
                    <p id="about-customers-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        <h5 className="card-title">{reviews.name}</h5>
                      </p>
                    
                    <li>
                    <h5 className="card-title">{reviews.name}</h5>
                   
                      <h6 className="card-text">
                        {reviews.username}</h6>
                      <h6 id="about-customers-text" className="card-text ">
                        {reviews.content}
                      </h6>
                      <h6 className="card-text ">{reviews.starview}</h6>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

interface IVendorProfile {}

export default VendorProfile;

