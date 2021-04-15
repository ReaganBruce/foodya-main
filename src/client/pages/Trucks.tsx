import * as React from "react";
import { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "../scss/trucks.scss";

const Trucks: React.FC<ITrucks> = () => {
  const [startingSearch, setStartingSearch] = useState("");
  const [trucks, setTrucks] = useState(null);
  const [rec, setRec] = useState([]);
  const TOKEN = window.localStorage.getItem("token");
  const R = JSON.parse(window.localStorage.getItem("rec"));
  const history = useHistory();

  let error = trucks?.businesses.every((e: any) => {
    return e.categories.every((c: any) => {
      return !e.name.toLowerCase().includes(startingSearch.toLowerCase()) && !c.title.toLowerCase().includes(startingSearch.toLowerCase());
    });
  });

  if (window.localStorage.getItem("homeSearch")) {
    let homeSearch = window.localStorage.getItem("homeSearch");
    setStartingSearch(homeSearch);
    window.localStorage.removeItem("homeSearch");
  }

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/yelp/food-truck/birmingham-al");
      const trucks = await res.json();
      setTrucks(trucks);
      if (TOKEN && R) {
        setRec(R);
        // console.log(rec);
      }
    })();
  }, []);

  let handleFoodtruck = (truck: any) => {
    return function (e: any) {
      for (let index = 0; index < truck.categories.length; index++) {
        let tag = truck.categories[index].title;
        // console.log(tag);
        if (TOKEN) {
          if (tag === "Food Trucks") {
          } else {
            const REC = JSON.parse(window.localStorage.getItem("rec"));
            if (REC) {
              window.localStorage.setItem("rec", JSON.stringify([...REC, tag])); // to retrieve you would JSON.parse(localStorage.getItem("rec"))
            } else {
              window.localStorage.setItem("rec", JSON.stringify([tag]));
            }
          }
        }
      }
      history.push(`/trucks/${truck.id}`);
    };
  };

  let recommendations = () => {
    history.push("/recommendations");
  };

  return (
    <>
      <main className="trucks-container">
        <section id="recommendation-row" className="row">
          <div className="col-12">
            <div className="trucks-card-text-center">
              <div id="card-body-truck" className="card-body">
                <div className="col-12 my-4">
                  <h1 id="truck-help" className="my-4 text-center">Let us help!</h1>
                </div>
                <br></br>
                <input type="text" value={startingSearch} onChange={(e) => setStartingSearch(e.target.value)} />
                <p></p>
                <button className="btn button" onClick={recommendations}>
                  Recommend
                </button>
                <p className="card-text">
                  <br></br>
                  Enter your requests above and let us recommend a food truck for you!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="truck-text2">Check out our participating vendors!</div>

      <div className="row justify-content-center align-items-center">
        {trucks?.businesses
          .filter((truck: any) => {
            for (let index = 0; index < truck.categories.length; index++) {
              let p = truck.categories[index].title;
              if (startingSearch == "") {
                return truck;
              } else if (truck.name.toLowerCase().includes(startingSearch.toLowerCase()) || p.toLowerCase().includes(startingSearch.toLowerCase())) {
                return truck;
              } else if (error) {
                return truck;
              }
            } // if they dont have anything thats in any of them it just spews them all back out. - we could probably do something with if (css style exists) then put out an error statement
          })
          .map((truck: any) => (
            <div className="col-5 float-left p-0 m-3 pixels-height">
              <div id="trucks" onClick={handleFoodtruck(truck)} className="pointer justify-content-center p-6 m-6 pixels-height">
                <div key={`truck-preview-${truck.id}`} className="custom-card-truck pixels-height">
                  <div id="truck-image-wrapper">
                    {" "}
                    <img src={`${truck.image_url}`} key={`truck-photo-${truck.id}`} className="hover-over card-photo-truck" alt="" />
                  </div>
                  <h6 key={`truck-name-${truck.id}`} className="truck-name-text pr-2">
                    {truck.name}
                  </h6>
                  {/* <br></br> */}
                  <p className="location-text pr-2">{truck.location.display_address}</p>
                  <p className="phone-text pr-2">{truck.display_phone}</p>
                  <p className="rating-text pr-2">Rating: {truck.rating}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

interface ITrucks {}

export default Trucks;
