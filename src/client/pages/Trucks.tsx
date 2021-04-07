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
                           
                        </div>
                    </div>
                </section> 
            </main>
        </>
    );

}

interface ITrucks {}

export default Trucks;
