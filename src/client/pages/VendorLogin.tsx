import * as React from 'react';

const VendorLogin: React.FC<IVendorLogin> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for VendorLogin!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IVendorLogin {}

export default VendorLogin;