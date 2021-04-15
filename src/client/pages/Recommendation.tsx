import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import '../scss/trucks';

const Recommendations: React.FC<IRecommendations> = () => {
    const [trucks, setTrucks] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const TOKEN = window.localStorage.getItem("token");
    const R = JSON.parse(window.localStorage.getItem("rec"));
    const userName = window.localStorage.getItem("user");
    const history = useHistory();
    let m: number = 0;
    let hd: number = 0;
    let b: number = 0;
    let v: number = 0;
    let sf: number = 0;
    let cs: number = 0;
    let br: number = 0;
    let soul: number = 0;
    let af: number = 0;
    let bbq: number = 0;
    let indo: number = 0;
    let sb: number = 0;
    let impo: number = 0;
    let sea: number = 0;
    let vene: number = 0;
    let amer: number = 0;
    let taco: number = 0;
    let indian: number = 0;
    let caterers: number = 0;


    React.useEffect(() => {
        (async () => {
            const res = await fetch("/yelp/food-truck/birmingham-al")
            const trucks = await res.json();
            setTrucks(trucks);

        })();
    }, []);


    if (TOKEN && R) {
        R.map((tag: string) => { //possibilities Mexican, Hot dogs, Burgers, Vegan, Specialty Food, Chicken Shop, British, Soul Food, Asian Fusion, Barbeque, Indonesian, Sushi Bars, Imported Food, Seafood, Venezuelan, American (Traditional), Tacos, Indian, Caterers
            const lowerTag = tag.toLowerCase();
            if (lowerTag === "mexican") {
                m++;
            } else if (lowerTag === "hot dogs") {
                hd++;
            } else if (lowerTag === "burgers") {
                b++;
            } else if (lowerTag === "vegan") {
                v++;
            } else if (lowerTag === "specialty food") {
                sf++;
            } else if (lowerTag === "chicken shop") {
                cs++;
            } else if (lowerTag === "british") {
                br++;
            } else if (lowerTag === "soul food") {
                soul++;
            } else if (lowerTag === "asian fusion") {
                af++;
            } else if (lowerTag === "barbeque") {
                bbq++;
            } else if (lowerTag === "indonesian") {
                indo++;
            } else if (lowerTag === "sushi bars") {
                sb++;
            } else if (lowerTag === "imported food") {
                impo++;
            } else if (lowerTag === "seafood") {
                sea++;
            } else if (lowerTag === "venezuelan") {
                vene++;
            } else if (lowerTag === "american (traditional)") {
                amer++;
            } else if (lowerTag === "tacos") {
                taco++;
            } else if (lowerTag === "indian") {
                indian++;
            } else if (lowerTag === "caterers") {
                caterers++;
            }
        })
    }

    let handleDisplay = (truck: any) => {
        let style = () => {
            return truck.categories.map((tag: any) => {
                const lowerTag = tag.title.toLowerCase();
                if (lowerTag === "mexican") {
                    return m;
                } else if (lowerTag === "hot dogs") {
                    return hd;
                } else if (lowerTag === "burgers") {
                    return b;
                } else if (lowerTag === "vegan") {
                    return v;
                } else if (lowerTag === "specialty food") {
                    return sf;
                } else if (lowerTag === "chicken shop") {
                    return cs;
                } else if (lowerTag === "british") {
                    return br;
                } else if (lowerTag === "soul food") {
                    return soul;
                } else if (lowerTag === "asian fusion") {
                    return af;
                } else if (lowerTag === "barbeque") {
                    return bbq;
                } else if (lowerTag === "indonesian") {
                    return indo;
                } else if (lowerTag === "sushi bars") {
                    return sb;
                } else if (lowerTag === "imported food") {
                    return impo;
                } else if (lowerTag === "seafood") {
                    return sea;
                } else if (lowerTag === "venezuelan") {
                    return vene;
                } else if (lowerTag === "american (traditional)") {
                    return amer;
                } else if (lowerTag === "tacos") {
                    return taco;
                } else if (lowerTag === "indian") {
                    return indian;
                } else if (lowerTag === "caterers") {
                    return caterers;
                } else {
                    return -1;
                }
            })
        }
        let check = Math.max(...style());
        return check;
    }


    const handleClick = (truck: any) => {
        return function () {
            history.push(`/trucks/${truck.id}`)
        }
    }


    const handleLoad = () => {
        setLoaded(true);
    };

    useEffect(() => {
        setTimeout(() => {
            handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
        }, 1000);
    }, [loaded]);



    if (loaded) {

        return (
            <>
                <main className="trucks-container">
                    <section id="recommendation-row" className="row">
                        <div className="col-12">
                            <div className="trucks-card-text-center">
                                <div id="card-body-truck" className="card-body">
                                    <div className="col-12 my-4">
                                        <h1 id="rec-truck-help" className="my-4 text-center">
                                            {`${userName} Recommendations!`}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div className="row justify-content-center align-items-center">
                    <div className="rec-custom-flex">
                        {trucks?.businesses.map((truck: any) => (
                            <div style={{ order: handleDisplay(truck) }} className="col mt-4 mb-1">
                                <div id="trucks" className="justify-content-center p-6 m-6 pixels-height">
                                    <div key={`truck-card-${truck.id}`} onClick={handleClick(truck)} className="pointer custom-card-truck pixels-height">
                                        <div id="truck-image-wrapper">
                                            {" "}
                                            <img src={`${truck.image_url}`} key={`truck-photo-${truck.id}`} className="card-photo-truck" alt="" />
                                        </div>
                                        <h6 key={`truck-name-${truck.id}`} className="truck-name-text pr-2">
                                            {truck.name}
                                        </h6>
                                        <p className="location-text pr-2">{truck.location.display_address.slice(0, 1) + ", " + truck.location.display_address.slice(1, 2)}</p>
                                        <p className="phone-text pr-2">{truck.display_phone}</p>
                                        <p className="rating-text pr-2">Rating: {truck.rating}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="loader">
                    Loading...
                </div>
            </>
        )
    }
};

interface IRecommendations { }

export default Recommendations;


