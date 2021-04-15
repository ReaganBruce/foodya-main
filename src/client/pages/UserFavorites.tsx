import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Favorites: React.FC<IFavorites> = () => {
    const TOKEN = window.localStorage.getItem('token');
    const FAV = JSON.parse(window.localStorage.getItem("fuck me seriously lol i am going to taco bell after this"));
    const [favorites, setFavorites] = useState(null);
    console.log(favorites);

    useEffect(() => {
        (async () => {
            if (FAV) {
                return Promise.all(
                    FAV.map((tacobell: any) =>  {
                        try {
                           return fetch(`/yelp/${tacobell}`)
                                .then((res) => res.json())
                                .then((res) => { return res })
                        } catch (error) {
                            console.log(`Error getting favorites!`);
                        }
                    })
                )
                    .then((res) => { setFavorites(res) })
            } else {}
        })();
    }, []);


    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <div className="col-12">
                            <div key={`truck-details-card-${favorites?.id}`}>
                                <h1>{favorites?.name}</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

interface IFavorites { }

export default Favorites;