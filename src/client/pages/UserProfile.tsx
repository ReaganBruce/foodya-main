import * as React from 'react';
import { Link } from 'react-router-dom';

const UserProfile: React.FC<IUserProfile> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for UserProfile!</h1>
                        <h1 className="text-center">PUT YOUR INFO HERE!</h1>
                        <h1 className="text-center">CLICK TO CHECK OUT YOUR FAVORITE FOOD TRUCKS BELOW!</h1>
                            <Link className="btn btn-warning" to={'/login/favorites'}>SEE YOUR FAVORITE FOOD TRUCKS</Link>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IUserProfile {}

export default UserProfile;