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
                    <div className="col-12 forreal-though"></div>
                    <section className="d-flex justify-content-center col-12 search-bar">
                        <input className="curved input" type="text" value={search} placeholder="search..." />
                        <div className="space"></div>
                        <Link className="btn button" to={"/trucks"}>Search</Link>
                    </section>
                    <div className="spacing-200 col-12"></div>
                    <figure className="icon-cards mt-3">
                        <div className="icon-cards__content" >
                            <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">🙂</span></div>
                            <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">😊</span></div>
                            <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1">😀</span></div>
                        </div>
                    </figure>
                </section>
            </main>
        </>
    );

}

interface HomeProps { }

export default Home;