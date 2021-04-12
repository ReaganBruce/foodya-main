import * as React from 'react';
import { useParams } from 'react-router-dom';

const VendorDetails: React.FC<IVendorDetails> = () => {
    const { vendorid } = useParams<{ vendorid: string }>()


    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for VendorDetails {vendorid}!</h1>
                        
                    </div>
                </section>
            </main>
        </>
    );

}

interface IVendorDetails {}

export default VendorDetails;