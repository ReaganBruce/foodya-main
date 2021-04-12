import * as React from 'react';
import { useHistory } from "react-router-dom";

const UserProfile: React.FC<IUserProfile> = () => {
    const history = useHistory();

    const HandleLogout = () => {
        window.localStorage.clear();
        history.push("/");
    }



    return (
        <>
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <h1 className="text-center">This is a page for UserProfile!</h1>
                    <button className="col-12" onClick={HandleLogout}>Logout</button>
                </div>
            </section>
        </main>
        </>
    );

}

interface IUserProfile { }

export default UserProfile;