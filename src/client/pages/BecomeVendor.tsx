import * as React from 'react';
import { Link } from 'react-router-dom';

const BecomeVendor: React.FC<IBecomeVendor> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1>SMASH THE BUTTON BELOW</h1>
                        <div className="text-center">
                            <Link className="btn btn-warning" to={'/login/vendor'}>LOGIN AS VENDOR</Link></div>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IBecomeVendor {}

export default BecomeVendor;
