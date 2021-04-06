import * as React from 'react';

const UserProfile: React.FC<IUserProfile> = () => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="text-center">This is a page for UserProfile!</h1>
                    </div>
                </section>
            </main>
        </>
    );

}

interface IUserProfile {}

export default UserProfile;