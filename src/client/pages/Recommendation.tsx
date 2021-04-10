import * as React from "react";
import { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import '../scss/trucks';

const Recommendations: React.FC<IRecommendations> = () => {
    const [trucks, setTrucks] = useState(null);
    const TOKEN = window.localStorage.getItem("token");
    const R = JSON.parse(window.localStorage.getItem("rec"));
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
        console.log(check)
        return check;
    }

    return (
        <>
            <main className="container">
                <section className="justify-content-center row">
                    <div className="text-center col-12">Recommendations</div>
                    <div></div>
                    <div className="custom-flex">
                        {trucks?.businesses.map((truck: any) =>
                        (
                            <div style={{ order: handleDisplay(truck) }} >
                                {truck.name}
                            </div>
                        )
                        )}
                    </div>
                </section>
            </main>
        </>
    );
};

interface IRecommendations { }

export default Recommendations;