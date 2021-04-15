import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../scss/becomeavendor.scss';

const BecomeVendor: React.FC<IBecomeVendor> = () => {
    const [vendorName, setVendorName] = useState('');
    const [vendorEmail, setVendorEmail] = useState('');
    const [vendorPassword, setVendorPassword] = useState('');



    return (

        <>
            <main id="become-vendor-container" className="container">
                <div id="become-vendor-section" className="col-md-4 d-flex justify-content-center">
                    <div id="become-vendor-div" className="row">
                        <h4 id="become-vendor-title">WHY YOU SHOULD HOP IN</h4>
                        <p id="become-vendor-text">
                            Are you looking to become a vendor for FoodYA! Look no further! We believe Birmingham is a booming city, and our culture
                            has the data to back it up. If you become a vendor today, you'll gain all access to promotional opportunities from within FoodYA!
                            We at FoodYA will make sure your business has the opportunity to succeed and thrive within the Birmingham market, in addition to supplying
                            quality foods for all of its loyal citizens. If you're interested, and want to find out more, please create an account with us!
                            If you have questions, please feel free to contact us anywhere! We're looking forward to having you along! Let's go!
                        </p>
                        <img id="bham-img" src="./assets/bham.png" alt="bham-img" />
                    </div>
                    <div id="signup-vendor-section" className="col-md-4 d-flex justify-content-center">
                        <div id="signup-vendor-div" className="row">
                            <div id="signup-vendor-container">
                                <h4 id="foodya">FoodYA!</h4>
                            </div>

                            <div id="signup-vendor-div-input">
                                <form id="vendor-form">
                                    <div>
                                        <label id="vendor-name-label">VENDOR NAME</label>
                                    </div>
                                    <input
                                        className="form-control"
                                        id="vendor-name-input"
                                        value={vendorName}
                                        onChange={(e) => setVendorName(e.target.value)}
                                        type="text"
                                        placeholder="What's your name?"
                                    />

                                    <div>
                                        <label id="vendor-email-label">EMAIL</label>
                                    </div>
                                    <input id="vendor-email-input"
                                        className="form-control"
                                        value={vendorEmail}
                                        onChange={(e) => setVendorEmail(e.target.value)}
                                        type="email"
                                        placeholder="Email..."
                                    />

                                    <div>
                                        <label id="vendor-password-label">PASSWORD</label>
                                    </div>
                                    <input id="vendor-password-input"
                                        className="form-control"
                                        value={vendorPassword}
                                        onChange={(e) => setVendorPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password..."
                                    />
                                </form>
                                <Link to={'/vendor/profile'} id="vendor-submit-button" className="btn btn-warning btn-lg">
                                    Next
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>










            </main>
        </>
    );
}









{/* <h4 id="signup-vendor-title">GOT YOUR ATTENTION?</h4> */ }










{/* <main id="become-vendor-container" className="container">
                <div id="become-vendor-section" className='col-4 d-flex justify-content-center'>
                    <div id="container-div">
                        <div id="become-vendor-div"></div>
                        <h4 id="become-vendor-title">A LITTLE BIT ABOUT US</h4>
                    </div>
                </div>
            </main> */}






// <div id="customers-row" className="col-12 d-flex justify-content-center">
//                     <div id="about-customers-div" className="row justify-content-start">
//                         <h4 id="div-text-left">FOR AND BY BHAM!</h4>
//                         <p id="about-customers-text">
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
//                         </p>
//                     </div>
//                     <div id="about-customers-div" className="row justify-content-end">
//                         <img id="customer-div-img" src="./assets/p3_FoodTruck_HL1903_gi819016352.png" alt="" />
//                     </div>
//                 </div>




{/* <div id="container-div" className="col-6 d-flex justify-content-center">
<div id="become-vendor-info-span"></div>
</div>
</div> */}

interface IBecomeVendor { }

export default BecomeVendor;
