import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

const Favorites: React.FC<IFavorites> = () => {
    const { vendorid } = useParams<{ vendorid: string }>();
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">HERE IS A LIST OF ALL UR FAV FOOD TRUCKS</h1>
                        <h1 className="text-center">CLICK THE BUTTONS TO FIND OUT MORE ABOUT YOUR FAVORITE FOOD TRUCKS INDIVUDALLY, BY THEIR ID</h1>
                        <Link className="btn btn-warning" to={`/login/favorites/${vendorid}`}>CLICK TO SEE MORE ABOUT YOUR FAV FOOD TRUCK</Link>
                        <Link className="btn btn-warning" to={`/login/favorites/${vendorid}`}>CLICK TO SEE MORE ABOUT YOUR FAV FOOD TRUCK</Link>
                        <Link className="btn btn-warning" to={`/login/favorites/${vendorid}`}>CLICK TO SEE MORE ABOUT YOUR FAV FOOD TRUCK</Link>
                        <Link className="btn btn-warning" to={`/login/favorites/${vendorid}`}>CLICK TO SEE MORE ABOUT YOUR FAV FOOD TRUCK</Link>
                        <Link className="btn btn-warning" to={`/login/favorites/${vendorid}`}>CLICK TO SEE MORE ABOUT YOUR FAV FOOD TRUCK</Link>
                        <Link className="btn btn-warning" to={`/login/favorites/${vendorid}`}>CLICK TO SEE MORE ABOUT YOUR FAV FOOD TRUCK</Link>
                        <Link className="btn btn-warning" to={`/login/favorites/${vendorid}`}>CLICK TO SEE MORE ABOUT YOUR FAV FOOD TRUCK</Link>
                    </div>
                </section>
            </main>
        </>
    );
}

interface IFavorites {}

export default Favorites;