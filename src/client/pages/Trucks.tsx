import * as React from 'react';
import {  Link, useParams } from 'react-router-dom';


const Trucks: React.FC<ITrucks> = () => {
    const { truckdetailsid } = useParams<{ truckdetailsid: string }>();

    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <div>
                            <h1 className="text-center">HERE IS SAVED TRUCKS</h1>
                            <Link className="text-center btn btn-danger"
                             to={`/trucks/${truckdetailsid}`}>CLICK THIS BUTTON TO SEE EACH INDIVIDUAL TRUCK</Link>
                             <Link className="text-center btn btn-danger" to={`/trucks/${truckdetailsid}`}>CLICK THIS BUTTON TO SEE EACH INDIVIDUAL TRUCK</Link>
                             <Link className="text-center btn btn-danger" to={`/trucks/${truckdetailsid}`}>CLICK THIS BUTTON TO SEE EACH INDIVIDUAL TRUCK</Link>
                             <Link className="text-center btn btn-danger" to={`/trucks/${truckdetailsid}`}>CLICK THIS BUTTON TO SEE EACH INDIVIDUAL TRUCK</Link>
                             <Link className="text-center btn btn-danger" to={`/trucks/${truckdetailsid}`}>CLICK THIS BUTTON TO SEE EACH INDIVIDUAL TRUCK</Link>
                             <Link className="text-center btn btn-danger" to={`/trucks/${truckdetailsid}`}>CLICK THIS BUTTON TO SEE EACH INDIVIDUAL TRUCK</Link>
                             <Link className="text-center btn btn-danger" to={`/trucks/${truckdetailsid}`}>CLICK THIS BUTTON TO SEE EACH INDIVIDUAL TRUCK</Link>
                        </div>
                    </div>
                </section> 
            </main>
        </>
    );

}

interface ITrucks {}

export default Trucks;
