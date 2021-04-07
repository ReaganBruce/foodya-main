import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC<INav> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <div>
                            <section className="btn btn-danger">
                                <Link to={'/'}>Home</Link>
                            </section>
                            <section className="btn btn-success">
                                <Link to={'/trucks'}>TRUCKS</Link>
                            </section>
                            <section className="btn btn-warning">
                                <Link to={'/becomevendor'}>Become A Vendor Today!</Link>
                            </section>
                            <section className="btn btn-warning">
                                <Link to={'/about'}>About</Link>
                            </section>
                            <section className="btn btn-warning">
                                <Link to={'/contact'}>Contact</Link>
                            </section>
                        </div>
                        <section className="btn btn-danger">
                            <div className="justify-content-end">
                                <Link className="" to={'/login'}>LOGIN PLS</Link>
                                </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}

interface INav { }

export default Nav;
