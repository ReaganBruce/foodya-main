import * as React from 'react';
import { useParams } from 'react-router-dom';

const TruckDetails: React.FC<ITruckDetails> = () => {

    const { truckdetailsid } = useParams<{ truckdetailsid: string }>();
    const { truckreviewsid } = useParams<{ truckreviewsid: string }>();

    // get food truck by id


    //get food truck reviews by id


    //post reviews 


    //reviews delete




    

    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for TRUCK DETAILS: {truckdetailsid}!</h1>
                        <h1 className="text-center">This is a page for TRUCK REVIEWS: {truckreviewsid}!</h1>
                        
                    </div>
                </section>
            </main>
        </>
    );

}

interface ITruckDetails {}

export default TruckDetails;