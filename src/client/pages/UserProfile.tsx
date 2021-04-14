import * as React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../scss/general-styles.scss"
const moment = require("moment");

const UserProfile: React.FC<IUserProfile> = (props) => {
    const { username } = useParams<Record<string, string | undefined>>();
    const history = useHistory();
    const [favorite, setFavorite] = useState(null);
    const [userinfo, setUserInfo] = useState(null);
    const [authorization, setAuth] = useState(null);
    const [shift, setShift] = useState(false);
    const [ctrl, setCtrl] = useState(false);
    const name = window.localStorage.getItem("user");
    const checkDark = window.localStorage.getItem("dark");
    const token = window.localStorage.getItem("token");
    const FAVORITES = JSON.parse(window.localStorage.getItem("favorites"));
    console.log(userinfo);
    if (name === username && authorization == null) {
        setAuth(`'Authorization': 'Bearer ${token}`);
    }

    React.useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/user/${username}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const user = await res.json();
                setUserInfo(user);
            } catch (e) {
                console.log(e);

            }
        })();
    }, [])

    React.useEffect(() => {
        (async () => {
            if (FAVORITES) {
                try {
                    const res = await fetch(`/yelp/businesses/${FAVORITES[0]}/reviews`)
                    const favorite = await res.json();
                    setFavorite(favorite);
                } catch (e) {
                    console.log(e);

                }
            }
        })();
    }, [])

    const HandleLogout = () => {
        window.localStorage.clear();
        history.push("/");
    }

    let handleFeatured = (id: any) => {
        return function (e: any) {
            history.push(`/trucks/${id}`);
        }
    }

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

    const handleFavoritePush = () => {
        history.push("/user/favorites");
    }



    return (
        <>
        <div className="spacing-50"></div>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <img className="pfp col-4" src="../assests/default.png" alt="" />
                            <div className="col-8 custom-profile-card alter-color custom-margin-top">
                                <div className="bl-quicksand-text d-flex center-right">
                                    <span className="text-center">{userinfo?.username}</span>
                                    {authorization ? (<span className="d-flex justify-self-end"> <img id="edit" className="mt-3" src="../assests/edit_button.png" alt="" /> </span>) : (<div></div>)}
                                </div>
                                <div className="d-flex spacing-120 flex-wrap align-items-around">
                                    <div className="d-flex col-12">
                                        <div className="bold">Location:</div>
                                        <div className="space"></div>
                                        <div className="non-bold">Birmingham, AL</div>
                                    </div>
                                    <div className="d-flex col-12">
                                        <div className="bold">Number of reviews:</div>
                                        <div className="space"></div>
                                        <div className="non-bold">0</div>
                                    </div>
                                    <div className="d-flex col-12">
                                        <div className="bold">Been a member since:</div>
                                        <div className="space"></div>
                                        <div className="non-bold">{moment(userinfo?.created_at).format("MMM Do YYYY")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div onClick={handleFavoritePush} className="col-12 hover custom-profile-card2 alter-color">
                                <div className="text-center bl-quicksand-text">Favorites</div>
                                {favorite ? (<div onClick={handleFeatured(favorite.id)} className="custom-card text-fun">
                                    <img src={`${favorite.image_url}`} className="card-photo" alt="" />
                                    <div className="name-margin mt-5 name d-flex text-center justify-content-center">{favorite.name}</div>
                                </div>) : (<div className="text-center text-muted">no favorites quite yet!</div>)}
                                <div className="spacing-50"></div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="col-12 custom-profile-card2 alter-color hover">
                                <div className="text-center bl-quicksand-text">Reviews</div>
                                <div className="text-center text-muted">no reviews quite yet!</div>
                                <div className="spacing-50"></div>
                            </div>
                        </div>

                        {authorization ? (<div className="d-flex justify-content-end"><button className="button" onClick={HandleLogout}>Logout</button></div>) : (<div></div>)}
                        <div className="spacing-100"></div>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IUserProfile { }

export default UserProfile;