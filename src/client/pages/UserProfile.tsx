import * as React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../scss/general-styles.scss"
const moment = require("moment");

const UserProfile: React.FC<IUserProfile> = (props) => {

    const history = useHistory();
    const [userinfo, setUserInfo] = useState(null);
    const [shift, setShift] = useState(false);
    const [ctrl, setCtrl] = useState(false);
    const name = window.localStorage.getItem("user");
    const checkDark = window.localStorage.getItem("dark");
    console.log(userinfo);

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/user/${name}`)
            const user = await res.json();
            setUserInfo(user);
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
                        <img src="../assests/default.png" alt=""/>
                        <div>{userinfo?.email} {moment(userinfo?.created_at).format("MMM Do YYYY")} {userinfo?.username} </div>
                        <button className="button" onClick={HandleLogout}>Logout</button>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IUserProfile { }

export default UserProfile;