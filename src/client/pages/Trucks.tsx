import * as React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../scss/trucks.scss';

const Trucks: React.FC<ITrucks> = () => {
  const { truckdetailsid } = useParams<{ truckdetailsid: string }>();
  const [trucks, setTrucks] = useState(null);

  React.useEffect(() => {
    (async () => {
        console.log("hello")
        const res = await fetch("/yelp/food-truck/birmingham-al")
        const theTrucks = await res.json();
        setTrucks(theTrucks);
    })();
}, []);
  

  return (
    <>
      <main className="container">
        <section className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">Find the right truck for you!</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                                 </a>
              </div>
            </div>
          </div>
        </section>
      </main>


      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." alt="..."></img>
            {/* </div> */}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface ITrucks { }

export default Trucks;
