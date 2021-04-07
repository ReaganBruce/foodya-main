import * as React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC<ILogin> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">LOGIN BELOW PLS</h1>
                        <Link className="btn btn-warning"to={'/login/profile'}>LOGIN AS USER</Link>
                        <Link className="btn btn-warning"to={'/login/vendor'}>LOGIN AS VENDOR</Link>
                    </div>
                </section>
            </main>
        </>
    );

}

interface ILogin {}

export default Login;
