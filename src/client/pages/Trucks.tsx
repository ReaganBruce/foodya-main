import * as React from 'react';

const Trucks: React.FC<ITrucks> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for Trucks!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface ITrucks {}

export default Trucks;
