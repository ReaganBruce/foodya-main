import * as React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../scss/general-styles.scss"

const Favorites: React.FC<IFavorites> = () => {
    const TOKEN = window.localStorage.getItem('token');
    const FAV = JSON.parse(window.localStorage.getItem("fuck me seriously lol i am going to taco bell after this"));
    const name = window.localStorage.getItem("user");
    const history = useHistory()
    const [favorites, setFavorites] = useState(null);
    console.log(favorites);
    console.log(FAV)

    useEffect(() => {
        (async () => {
            if (FAV) {
                return Promise.all(
                    FAV.map((tacobell: any) => {

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
            } else { }
        })();
    }, []);

    let handleFeatured = (id: any) => {
        return function (e: any) {
            history.push(`/trucks/${id}`);
        }
    }

    let removeHandler = (id: any) => {

        return () => {
            console.log(FAV.indexOf(id));
            FAV.splice(FAV.indexOf(id), 1);
            if (FAV[0]) {
                window.localStorage.setItem("fuck me seriously lol i am going to taco bell after this", JSON.stringify([FAV]));
            } else {
                localStorage.removeItem("fuck me seriously lol i am going to taco bell after this")
            }
            location.reload(true);
        }
    }

    let routeProfile = () => {
        history.push(`/profile/${name}`)
    }

    let routeTrucks = () => {
        history.push("/trucks")
    }

    if (FAV) {
        return (
            <>
                <main className="container d-flex justify-content-center mt-5 flex-wrap">
                    <div className="col-12">
                        <button onClick={routeProfile} className="btn btn-warning goback-margin">Go Back?</button>
                    </div>
                    {favorites?.map((favorite: any) => (
                        <div key={`truck-preview-${favorite.id}`} className={`hover-over pointer col-5 m-3 custom-card text-fun`}>
                            <img src={`${favorite.image_url}`} key={`truck-photo-${favorite.id}`} className="card-photo" alt="" />
                            <div key={`truck-name-${favorite.id}`} className="name-margin mt-5 name d-flex text-center justify-content-center">{favorite.name}</div>
                            <button className="btn btn-warning margin-special" onClick={removeHandler(favorite.id)}>Remove</button>
                        </div>
                    ))}
                </main>
            </>
        )
    } else {
        return (
            <>
                <main className="container d-flex justify-content-center flex-wrap">
                    <div className="col-12">
                        <button onClick={routeProfile} className="btn btn-warning goback-margin mt-5">Go Back?</button>
                    </div>
                    <div className="bl-abril-text col-12 text-center">No favorites yet...</div>
                    <div className="spacing-100 col-12"></div>
                    <div className="spacing-50 col-12"></div>
                    <div className="bl-small-quicksand-text text-muted text-center col-12">Lets find what you like</div>
                    <button onClick={routeTrucks} className="btn btn-warning">Let's go!</button>
                </main>
            </>
        )
    }
}

interface IFavorites { }

export default Favorites;