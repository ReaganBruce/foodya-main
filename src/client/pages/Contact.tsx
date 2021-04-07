import * as React from 'react';

const Contact: React.FC<IContact> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for Contact!</h1>
                        <a href="mailto:ReaganBruceBirmingham@Gmail.com">Email Us and hire us please i don't want to work at a fucking retail place again</a>
                        <a href="tel:205-739-9354">CLICK TO CALL</a>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IContact {}

export default Contact;
