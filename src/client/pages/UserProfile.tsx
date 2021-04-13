import * as React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../scss/general-styles.scss"
const moment = require("moment");

const UserProfile: React.FC<IUserProfile> = (props) => {
    const { username } = useParams<Record<string, string | undefined>>();
    const history = useHistory();
    const [userinfo, setUserInfo] = useState(null);
    const [authorization, setAuth] = useState(null);
    const [shift, setShift] = useState(false);
    const [ctrl, setCtrl] = useState(false);
    const name = window.localStorage.getItem("user");
    const checkDark = window.localStorage.getItem("dark");
    const token = window.localStorage.getItem("token");
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

    const HandleLogout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("hey");
        history.push("/");
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



    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <img className="pfp col-4" src="../assests/default.png" alt="" />
                            <div className="col-8 custom-card custom-margin-top">
                                <div className="bl-medium-abril-text">{userinfo?.username}</div>
                                <div>{userinfo?.email}</div>
                                <div>Been a member since: {moment(userinfo?.created_at).format("MMM Do YYYY")}</div>
                                {authorization ? (<div className="d-flex justify-content-end"><button className="button">edit</button></div>) : (<div></div>)}
                            </div>
                        </div>
                        
                        <div className="spacing-150"></div>
                        <div className="spacing-100"></div>
                        {authorization ? (<div className="d-flex justify-content-end"><button className="button" onClick={HandleLogout}>Logout</button></div>) : ( <div></div> )}
                        <div className="spacing-150"></div>
                        <div className="spacing-150"></div>
                        <div className="spacing-150"></div>
                        {authorization ? (<div className="d-flex justify-content-end"><button className="delete button-danger">Delete My Profile.</button></div>) : ( <img src="../assests/stick_figure.gif" alt=""/> )}
                    </div>
                </section>
            </main>
        </>
    );

}

interface IUserProfile { }

export default UserProfile;