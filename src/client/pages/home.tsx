import * as React from 'react';
import './scss/app';

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for Home!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface HomeProps {}

export default Home;