import * as React from 'react';

const Favorites: React.FC<IFavorites> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for Favorites!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IFavorites {}

export default Favorites;