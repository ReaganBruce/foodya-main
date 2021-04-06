import * as React from 'react';
import { useParams } from 'react-router-dom';

const TruckDetails: React.FC<ITruckDetails> = () => {

    const { truckdetailsid } = useParams<{ truckdetailsid: string }>();
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for TRUCK DETAILS: {truckdetailsid}!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface ITruckDetails {}

export default TruckDetails;