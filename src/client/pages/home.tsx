import * as React from 'react';
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../scss/general-styles";

const Home: React.FC<HomeProps> = () => {
    const [search, setSearch] = useState("");
    const [trucks, setTrucks] = useState(null);
    const [truck, setTruck] = useState(null);
    const [hey, setHey] = useState(null);
    const [ctrl, setCtrl] = useState(false);
    const [shift, setShift] = useState(false);
    const history = useHistory();
    const WelcomeBack = window.localStorage.getItem("hey");
    const checkDark = window.localStorage.getItem("dark");
    // console.log(trucks)

    //dark mode ctrl+shift+l
    window.addEventListener("keydown", (e: any) => {
        if (e.key == "Control") {
            setCtrl(true);
        } else if (e.key == "Shift") {
            setShift(true);
        } else if (e.key == "L" && ctrl == true && shift == true) {
            darkmode();
        }
    })
    window.addEventListener("keyup", (e: any) => {
        if (e.key == "Control") {
            setCtrl(false);
        } else if (e.key == "Shift") {
            setShift(false);
        }
    })

    React.useEffect(() => {
        (async () => {
            // console.log("hello")
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
        return function (e: any) {
            history.push(`/trucks/${id}`);
        }
    }

    let displayFeatured = (truck: any) => {
        if (truck.rating == 5) {
            return (
                <>
                    <div key={`truck-preview-${truck.id}`} onClick={handleFeatured(truck.id)} className="col-5 custom-card text-fun">
                        <img src={`${truck.image_url}`} key={`truck-photo-${truck.id}`} className="card-photo" alt="" />
                        <div key={`truck-name-${truck.id}`} className="name-margin mt-5 name d-flex text-center justify-content-center">{truck.name}</div>
                        <section key={`truck-message-${truck.id}`} className="invisible-big rating">5</section>
                    </div>
                </>
            )
        }
    }

    let handleHey = () => {
        let hey: string = "hey";
        setHey(hey);
    }

    let handleWelcomeBack = () => {
        let welcomeback = "welcomeback"
        window.localStorage.setItem("hey", welcomeback);
    }

    let darkmode = () => {
        if (!checkDark) {
            window.localStorage.setItem("mode", "index2.scss");
            window.localStorage.setItem("dark", "hi");
        } else {
            window.localStorage.removeItem("dark");
            window.localStorage.removeItem("mode");
        }
        window.location.reload(true);
    }



    let passinSearch = () => {
        window.localStorage.setItem("homeSearch", search);
    }

    let letFateDecide = () => {
        let random = Math.floor(Math.random() * 20);
        let truck = trucks?.businesses[random];
        setTruck(truck);
    }

    let handleTruckPage = () => {
        history.push("/trucks")
    }

    return (
        <>
            <div style={{ backgroundImage: "url(/assests/homepageline.png)", backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
                <main className="container">
                    <section className="row">
                        <div className="col-12 my-4">
                            <h1 className="my-4 text-center bl-abril-text">Find A Food Truck:</h1>
                        </div>
                        <section className="d-flex justify-content-center col-12 search-bar">
                            <input className="curved input" type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="search..." />
                            <div className="space"></div>
                            <Link className="btn button" onClick={passinSearch} to={"/trucks"}>Search</Link>
                        </section>
                        <div className="d-flex justify-content-center spacing-100 col-12 mt-4"><span><button className="btn button" onClick={letFateDecide}>Let Fate Decide!</button></span></div>
                        {truck ? (<div key={`key-${truck.id}`} className="hover-over col-12 d-flex justify-content-center"><div key={`truck-preview-${truck.id}`} onClick={handleFeatured(truck.id)} className="col-5 custom-card text-fun">
                            <img src={`${truck.image_url}`} key={`truck-photo-${truck.id}`} className="card-photo" alt="" />
                            <div key={`truck-name-${truck.id}`} className="name-margin mt-5 name d-flex text-center justify-content-center">{truck.name}</div>
                            <section key={`truck-rating-${truck.id}`} className="bl-small-abril-text margin-210 margin-top-25">Check us out!</section>
                        </div></div>) : (<div className="spacing-50"> </div>)}
                        <div className="col-12 d-flex justify-content-center">
                            <figure className="icon-cards mt-3">
                                <div className="icon-cards__content" >
                                    <div className="icon-cards__item d-flex align-items-center justify-content-center "><img className="size-up" src="../assets/p3_FoodTruck_HL1903_gi819016352.png" alt="" /></div>
                                    <div className="icon-cards__item d-flex align-items-center justify-content-center"><img className="size-up" src="../assets/bham.png" alt="" /></div>
                                    <div className="icon-cards__item d-flex align-items-center justify-content-center"><img className="size-up" src="../assets/01eee050afff4d52488eb0574ea0fec3-railroad-park.png" alt="" /></div>
                                </div>
                            </figure>
                            {/* <img src="../assests/bham.png" className="behind bham-image" alt="" /> */}
                        </div>
                    </section>
                    <div className="spacing-50"></div>
                    <section className="row overflow-hidden">
                        <div className="mobile-on bl-small-quicksand-text">We want to set you up with a foodtruck today, head on over and be one of the first to try and rate one of the many incredible foodtrucks Birmingham has to offer!</div>
                        <div className="d-flex justify-content-center col-md-12 my-5">
                            <p className="mobile-off col-3 bl-medium-quicksand-text">We want to set you up with a foodtruck today, head on over and be one of the first to try and rate one of the many incredible foodtrucks Birmingham has to <br/> offer!</p>
                            <img className="custom-exhaust absolute small-size flip-horizontally mobile-offf pointer" onClick={handleTruckPage} src="https://cdn3.iconfinder.com/data/icons/pollution-line-1/96/exhaust_pollution_car_smoke-512.png" alt="" />
                            <img className="image2" onMouseEnter={handleHey} onMouseLeave={handleWelcomeBack} src="../assests/foodtruck-banner.png" alt="" />
                            {hey ? (<> <img className="image3 fade-in-text" src="../assests/speechbubble.png" alt="" />
                                {WelcomeBack ? (<div className="fade-in-text welcomeback text-shadow background-transparent text-wrap">Welcome back!</div>) : (<div className="fade-in-text hey text-shadow background-transparent">Hey!</div>)}</>) : (<span></span>)}
                            <p className="mobile-off col-3 bl-medium-quicksand-text">Our purpose is to provide. Provide for our customers and provide for our vendors! We hope you find everything you are looking for, but if you dont we here at FoodYA! are only a message away.</p>
                        </div>
                        <div className="mobile-on bl-small-quicksand-text">Our purpose is to provide. Provide for our customers and provide for our vendors! We hope you find everything you are looking for, but if you dont we here at FoodYA! are only a message away.</div>

                    </section>
                    <section className="row">
                        <div className="col-12">
                            <div className="text-center p-4 bl-medium-abril-text">Featured Trucks:</div>
                        </div>
                        <section className="container d-flex justify-content-around flex-wrap hover-over">
                            {trucks?.businesses.map((truck: any) => (
                                displayFeatured(truck)
                            ))}
                        </section>
                    </section>
                    <div className="spacing-100"></div>

                </main>
                <section className="background-ribbon spacing-150 d-flex flex-wrap pt-0 pb-0">
                    <div className="pt-2 shadow w-medium-abril-text text-center col-12">Need anything, Let us know!</div>
                    <div className="pt-2 shadow w-small-abril-text text-center col-12 mobile-off">FoodYA@FoodYA.com</div>
                </section>
                <div className="spacing-100 justify-content-center d-flex align-items-center col-12 underlined"><Link to={"/contact"}>Contact Us</Link></div>
            </div>
        </>
    );

}

interface HomeProps { }

export default Home;