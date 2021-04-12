import * as React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../scss/trucks.scss";

const Trucks: React.FC<ITrucks> = () => {
  const { truckdetailsid } = useParams<{ truckdetailsid: string }>();
  const [trucks, setTrucks] = useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/yelp/food-truck/birmingham-al");
        const trucks = await res.json();
        setTrucks(trucks);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let allTrucks = (truck: any) => {
            return (
            <>
            <div className="trucks">
                <div key={`truck-preview-${truck.id}`}  className="hover-over col-5 custom-card text-fun">
                    <img src={`${truck.image_url}`} key={`truck-photo-${truck.id}`} className="card-photo" alt=""/>
                    <div key={`truck-name-${truck.id}`} className="name-margin mt-5 name d-flex text-center justify-content-center">{truck.name}</div>
                    </div>
            </div>
            </>
        )
    }


  return (
    <>
      <main className="container">
        <section className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="my-4 text-center bl-abril-text">
                  Find A Food Truck:
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="card mb-3">
        <div className="row">
          <div className="col-md-4">
            {/* <img src={`${truck.image_url}`} key={`truck-photo-${truck.id}`} className="card-photo" alt=""/> */}

            {/* </div> */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> </h5>
                <p className="card-text center">
                  
                </p>
                {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {trucks?.businesses.map((truck: any) => (allTrucks(truck)))}
    </>
  );
};

interface ITrucks {}

export default Trucks;
