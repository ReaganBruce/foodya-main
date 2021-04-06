import * as React from 'react';

const Login: React.FC<ILogin> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for Login!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface ILogin {}

export default Login;
