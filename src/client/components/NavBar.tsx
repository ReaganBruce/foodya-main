import { useLocation, NavLink } from 'react-router-dom';
import "../scss/NavBar";
import * as React from "react";

const NavBar: React.FC<INavBar> = () => {
    const location = useLocation();
    const path = location.pathname;
    let webname: string = path.slice(1,2).toUpperCase() + path.slice(2);
    if(webname == "") {
        webname = "Welcome";
    }
    if(webname == "Become-a-vendor") {
        webname = "Become A Vendor!"
    }
    const TOKEN = window.localStorage.getItem("token");

    return (
        <div className="">
            <div className="background-ribbon shadow">
                <div className="foodya justify-content-center">FoodYA!</div>
                <nav className="nav inner-ribbon justify-content-around shadow py-1">
                    <img className="image1 col-sm-12 col-md-3 " src="food-truck.png"></img>
                    <div className="dummy"></div>
                    <div className="dummy"></div>
                    <div className="dummy"></div>
                    <NavLink exact className="bl-text d-flex align-items-center" activeClassName="font-weight-bold border-dark" to="/">Home</NavLink>
                    <NavLink className="bl-text d-flex align-items-center" activeClassName="font-weight-bold border-dark" to="/trucks">Trucks</NavLink>
                    <NavLink className="bl-text d-flex align-items-center" activeClassName="font-weight-bold border-dark" to="/about">About</NavLink>
                    <NavLink className="bl-text d-flex align-items-center" activeClassName="font-weight-bold border-dark" to="/contact">Contact Us</NavLink>
                    <NavLink className="big bl-text d-flex align-items-center" activeClassName="font-weight-bold border-dark" to="/become-a-vendor">Become A Vendor TODAY!</NavLink>
                    {TOKEN ? (
                        <NavLink className="btn btn-custom w-text" to="/login/profile">Profile</NavLink>
                    ) : (
                        <NavLink className="btn btn-custom w-text" to="/login">Login</NavLink>
                    )}
                </nav>
                    <div className="webname d-flex justify-content-center">{webname}</div>
            </div>
        </div>
    );

}

interface INavBar { };

export default NavBar;