import * as React from 'react';
import { useParams } from 'react-router-dom';

const FavoriteVendor: React.FC<IFavoriteVendor> = () => {
    const { vendorid } = useParams<{ vendorid: string }>()


    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for FavoriteVendor {vendorid}!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IFavoriteVendor {}

export default FavoriteVendor;