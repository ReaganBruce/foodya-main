import * as React from "react";
import { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import '../scss/trucks.scss';

const Trucks: React.FC<ITrucks> = () => {
  const [startingSearch, setStartingSearch] = useState("");
  const [trucks, setTrucks] = useState(null);
  const [rec, setRec] = useState([]);
  const TOKEN = window.localStorage.getItem("token");
  const R = JSON.parse(window.localStorage.getItem("rec"));
  const history = useHistory();

  console.log(rec);




  let error = trucks?.businesses.every((e: any) => {
    return e.categories.every((c: any) => {
      return !e.name.toLowerCase().includes(startingSearch.toLowerCase()) && !c.title.toLowerCase().includes(startingSearch.toLowerCase());
    })
  })

  if (window.localStorage.getItem("homeSearch")) {
    let homeSearch = window.localStorage.getItem("homeSearch");
    setStartingSearch(homeSearch);
    window.localStorage.removeItem("homeSearch");
  }

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/yelp/food-truck/birmingham-al")
      const trucks = await res.json();
      setTrucks(trucks);
      if (TOKEN && R) {
        setRec(R);
        console.log(rec);
      }
    })();
  }, []);

  let handleFoodtruck = (truck: any) => {
    return function (e: any) {
      for (let index = 0; index < truck.categories.length; index++) {
        let tag = truck.categories[index].title;
        console.log(tag);
        if (TOKEN) {
          if (tag === "Food Trucks") { }
          else {
            const REC = JSON.parse(window.localStorage.getItem("rec"));
            if (REC) {
              window.localStorage.setItem("rec", JSON.stringify([...REC, tag])) // to retrieve you would JSON.parse(localStorage.getItem("rec"))
            } else {
              window.localStorage.setItem("rec", JSON.stringify([tag]))
            }
          }
        }
      }
      history.push(`/trucks/${truck.id}`);
    }
  }

  let recommendations = () => {
    history.push("/recommendations")
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
                <input type="text" value={startingSearch} onChange={e => setStartingSearch(e.target.value)} />
                <button className="btn btn-primary" onClick={recommendations}>recommendations</button>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                {trucks?.businesses.filter((truck: any) => {
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
                }).map((truck: any) => {
                  return <div onClick={handleFoodtruck(truck)}>{truck.name}</div>
                })}
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

interface ITrucks { }

export default Trucks;
