import * as React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/general-styles";

const Home: React.FC<HomeProps> = () => {
    const [search, setSearch] = useState("");

    function classToggle() {
        var el = document.querySelector('.icon-cards__content');
        el.classList.toggle('step-animation');
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
                    <div className="d-flex justify-content-center col-md-12 my-5">
                        <div className="col-4 d-flex align-items-center">Our purpose is to provide. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        <img src="../assests/foodtruck-banner.png" alt="" />
                        <div className="col-4 d-flex align-items-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                </section>

            </main>
        </>
    );

}

interface HomeProps { }

export default Home;