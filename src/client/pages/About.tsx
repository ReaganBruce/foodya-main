import * as React from 'react';
import '../scss/about.scss';
import { Link } from 'react-router-dom';



const About: React.FC<IAbout> = () => {
    return (
        <>

            <main id="about-us-container" className="container">
                <div id="vendors-row" className="col-12 d-flex justify-content-center">
                    <div id="about-vendors-div" className="row justify-content-start">
                        <img id="vendor-div-img" src="./assets/redezvous-food-truck-2.png" alt="" />
                    </div>
                    <div id="about-vendors-div" className="row justify-content-end">
                        <h4 id="div-text-right-1">OUR VENDORS</h4>
                        <p id="about-vendor-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>

                <div id="customers-row" className="col-12 d-flex justify-content-center">
                    <div id="about-customers-div" className="row justify-content-start">
                        <h4 id="div-text-left">FOR AND BY BHAM!</h4>
                        <p id="about-customers-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div id="about-customers-div" className="row justify-content-end">
                        <img id="customer-div-img" src="./assets/p3_FoodTruck_HL1903_gi819016352.png" alt="" />
                    </div>
                </div>

                <div id="others-row" className="col-12 d-flex justify-content-center">
                    <div id="about-other-div" className="row justify-content-start">
                        <img id="other-div-img" src="./assets/01eee050afff4d52488eb0574ea0fec3-railroad-park.png" alt="" />
                    </div>
                    <div id="about-other-div" className="row justify-content-end">
                        <h4 id="div-text-right-2">WHAT MAKES US UNIQUE?</h4>
                        <p id="about-other-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <div id="about-us-footer" className="row justify-content-center">
                        <h2 id="footer-text">BECOME A PART OF THE COMMUNITY!</h2>
                        <div className="col-12 d-flex justify-content-center">
                            <Link id="about-us-btn" className="btn btn-warning btn-lg" to={'/register'}>Sign Up Today!</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};


interface IAbout { }

export default About;
