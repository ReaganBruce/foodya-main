import * as React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../scss/trucks.scss';

const Trucks: React.FC<ITrucks> = () => {
  const { truckdetailsid } = useParams<{ truckdetailsid: string }>();
  const [startingSearch, setStartingSearch] = useState("");

  if(window.localStorage.getItem("homeSearch")){
    let homeSearch = window.localStorage.getItem("homeSearch");
    setStartingSearch(homeSearch);
    window.localStorage.removeItem("homeSearch");
  }
  return (
    <>
      <main className="container">
        <section className="row">
          <div className="col-12">
            <div className="card text-center">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <input type="text" value={startingSearch} onChange={e => setStartingSearch(e.target.value)}/>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface ITrucks {}

export default Trucks;
