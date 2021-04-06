import * as React from 'react';

const About: React.FC<IAbout> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for About!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IAbout {}

export default About;
