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
                            Customers had no way to find a food truck they might like unless they happened to stumble upon them, whether at an event or on social media.
                            Food trucks were creating social media pages and websites, but struggled to reach new customers.
                            They had to rely heavily on word of mouth or paid advertising. Here at FoodYA! we make it easy for customers to find our vendors!
                        </p>
                    </div>
                </div>

                <div id="customers-row" className="col-12 d-flex justify-content-center">
                    <div id="about-customers-div" className="row justify-content-start">
                        <h4 id="div-text-left">FOR AND BY BHAM!</h4>
                        <p id="about-customers-text">
                            We believe that Birmingham is a booming city! Birmingham is the heart of the south when it comes to innovation,
                            so naturally food trucks play a huge roll in our culture. We offer many local food trucks that are Birmingham based,
                            and a hot commodity for locals!
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
                            FoodYA! is dedicated to connecting the food truck community.
                            We host listings for food trucks and mobile food vendors, as well as where they’re serving now and where to find them next.
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
