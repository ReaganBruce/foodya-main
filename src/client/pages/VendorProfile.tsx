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
      <div>
        <img
          id="customer-image"
          src="/assets/redezvous-food-truck-2.png"
          alt="truck-img"
        />
      </div>
      <div
        id="business-row"
        className="col-12 d-flex justify-content-start"
      ></div>

      {getBusiness.map((business) => (
        <div>
          <div key={`business-card-${business.id}`}>
            <div id="customer-div">
              <h4 id="div-text">{business.name} </h4>
              <p id="business-text">
                <h6>{business.address}</h6>
                <h6>{business.city}</h6>
                <h6>{business.zipcode}</h6>
                <h6>{business.phone}</h6>
                <h6>
                  {`open:`}
                  {business.start}
                  {`-`}
                  {business.end}
                </h6>
              </p>
              <p id="customers-text">
                Welcome to the {business.name}, serving Central Alabama with two
                food trucks! We are excited to bring our own twist to Latin
                American street food, with flavors from around the world.
              </p>
            </div>
          </div>
        </div>
      ))}
      {getReviews.map((reviews) => (
        <div id="review-column">
          <div key={`review-card-${reviews.id}`}>
            <div id="reviews-div" className="row justify-content-start">
              <h4 id="div-reviews">{reviews.username} </h4>
              <p id="review-text">
                <h5>{reviews.name}</h5>
                <h6>{reviews.content}</h6>
                <p>{reviews.username}  said their tacos are great my favorite is the Cuban tacos.</p>
              </p>
            </div>       
          </div>
        </div>
      ))}
    </>
  );
};

interface IVendorProfile {}

export default VendorProfile;
