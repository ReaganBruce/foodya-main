import * as React from 'react';

const VendorProfile: React.FC<IVendorProfile> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">UPDATE YOUR INFO HERE</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IVendorProfile {}

export default VendorProfile;
