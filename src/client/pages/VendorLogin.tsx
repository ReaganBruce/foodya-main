import * as React from 'react';
import { Link } from 'react-router-dom';

const VendorLogin: React.FC<IVendorLogin> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">THANK YOU SIGNING IN, CARE TO SET UP YOUR TRUCK INFO?</h1>
                        <Link className="btn btn-warning" to={'/login/vendor/profile'}>GO TO PROFILE</Link>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IVendorLogin {}

export default VendorLogin;