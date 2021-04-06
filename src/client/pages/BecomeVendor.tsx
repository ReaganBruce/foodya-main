import * as React from 'react';

const BecomeVendor: React.FC<IBecomeVendor> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for BecomeVendor!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IBecomeVendor {}

export default BecomeVendor;
