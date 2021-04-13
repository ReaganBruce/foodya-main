import * as React from 'react';
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../scss/general-styles";

const Home: React.FC<HomeProps> = () => {
    const [search, setSearch] = useState("");
    const [trucks, setTrucks] = useState(null);
    const [featured, setFeatured] = useState([]);
    const history = useHistory();
    console.log(trucks)

    React.useEffect(() => {
        (async () => {
            console.log("hello")
            const res = await fetch("/yelp/food-truck/birmingham-al")
            const trucks = await res.json();
            setTrucks(trucks);
        })();
    }, []);

    let classToggle = () => {
        let el = document.querySelector('.icon-cards__content');
        el.classList.toggle('step-animation');
    }

    let handleFeatured = (id: any) => {
        return function(e: any) {
        history.push("/vendor/profile");
        }
    }

    let displayFeatured = (truck: any) => {
        if (truck.rating == 5) {
            return (
                <>
                    <div key={`truck-preview-${truck.id}`} onClick={handleFeatured(truck.id)} className="hover-over col-5 custom-card text-fun">
                        <img src={`${truck.image_url}`} key={`truck-photo-${truck.id}`} className="card-photo" alt=""/>
                        <div key={`truck-name-${truck.id}`} className="name-margin mt-5 name d-flex text-center justify-content-center">{truck.name}</div>
                        <div key={`truck-rating-${truck.id}`} className="rating invisible1">.</div>       
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12 my-4">
                        <h1 className="my-4 text-center bl-abril-text">Find A Food Truck:</h1>
                    </div>
                    <section className="d-flex justify-content-center col-12 search-bar">
                        <input className="curved input" type="text" value={search} placeholder="search..." />
                        <div className="space"></div>
                        <Link className="btn button" to={"/trucks"}>Search</Link>
                    </section>
                    <div className="d-flex justify-content-center spacing-150 col-12 mt-4"><span><button className="btn button">Let Fate Decide!</button></span></div>
                    <div className="col-12 d-flex justify-content-center">
                        <figure className="icon-cards mt-3">
                            <div className="icon-cards__content" >
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">🙂</span></div>
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">😊</span></div>
                                <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">😀</span></div>
                            </div>
                        </figure>
                    </div>
                </section>
                <div className="spacing-50"></div>
                <section className="row">
                    <div className="mobile-on">Our purpose is to provide. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    <div className="d-flex justify-content-center col-md-12 my-5">
                        <div className="mobile-off col-4">Our purpose is to provide. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        <img className="image2" src="../assests/foodtruck-banner.png" alt="" />
                        <div className="mobile-off col-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                    <div className="mobile-on">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                </section>
                <section className="row">
                    <div className="col-12">
                        <div className="text-center p-4 bl-small-abril-text">Featured Trucks:</div>
                    </div>
                    <section className="container d-flex justify-content-around flex-wrap">
                        {trucks?.businesses.map((truck: any) => (
                            displayFeatured(truck)
                        ))}
                    </section>
                </section>

            </main>
        </>
    );

}

interface HomeProps { }

export default Home;