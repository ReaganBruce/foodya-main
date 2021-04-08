import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC<INav> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <section className="d-flex justify-content-center">
                            <span>
                                <Link className="btn btn-warning" to={'/home'}>
                                    Home
                                </Link>
                            </span>
                            <span>
                                <Link className="btn btn-warning" to={'/trucks'}>
                                    Trucks
                                </Link>
                            </span>
                            <span>
                                <Link className="btn btn-warning" to={'/contact'}>
                                    Contact Us
                                </Link>
                            </span>
                            <span>
                                <Link className="btn btn-warning" to={'/about'}>
                                    About
                                </Link>
                            </span>
                            <span>
                                <Link className="btn btn-warning" to={'/becomevendor'}>
                                    Become a Vendor!
                                </Link>
                            </span>
                            <div className=" d-flex justify-content-end">
                                <span>
                                <Link className="btn btn-success" to={'/login'}>
                                        Login
                                </Link>
                                </span>
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




// return (
//     <>
//         <main className="container">
//             <section className="row">
//                 <div className="col-12">
//                     <section className="d-flex justify-content-center">
//                         <span>
//                             <Link className="btn btn-warning" to={'/home'}>
//                                 Home
//                             </Link>
//                         </span>
//                         <span>
//                             <Link className="btn btn-warning" to={'/trucks'}>
//                                 Trucks
//                             </Link>
//                         </span>
//                         <span>
//                             <Link className="btn btn-warning" to={'/contact'}>
//                                 Contact Us
//                             </Link>
//                         </span>
//                         <span>
//                             <Link className="btn btn-warning" to={'/about'}>
//                                 About
//                             </Link>
//                         </span>
//                         <span>
//                             <Link className="btn btn-warning" to={'/becomevendor'}>
//                                 Become a Vendor!
//                             </Link>
//                         </span>
//                         <div className=" d-flex justify-content-end">
//                             <span>
//                             <Link className="btn btn-success" to={'/login'}>
//                                     Login
//                             </Link>
//                             </span>
//                         </div>
//                     </section>
//                 </div>
//             </section>
//         </main>
//     </>
// );