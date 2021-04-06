import * as React from 'react';

const Contact: React.FC<IContact> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for Contact!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IContact {}

export default Contact;
