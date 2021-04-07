import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

const Favorites: React.FC<IFavorites> = () => {
    const { vendorid } = useParams<{ vendorid: string }>();
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                    
                    </div>
                </section>
            </main>
        </>
    );
}

interface IFavorites {}

export default Favorites;