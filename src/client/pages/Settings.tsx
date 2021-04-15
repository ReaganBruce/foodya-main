import * as React from "react";
import "../scss/general-styles"
import { useHistory } from "react-router-dom";

const Settings: React.FC<ISettings> = () => {
    const name = window.localStorage.getItem("user")
    const history = useHistory();
    const HandleLogout = () => {
        window.localStorage.clear();
        history.push("/");
    }
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/user/${name}`, {
            method: "DELETE",
        })
        window.localStorage.clear();
        if(res.ok) {
            history.push(`/`);
        }
    }
    return (
        <>
            <div className="spacing-100"></div>
            <main className="container custom-card2">
                <label className="col-12 d-flex justify-content-center bl-medium-abril-text">Done for today?</label>
                <div className="d-flex justify-content-center">
                    <button className="button" onClick={HandleLogout}>Logout</button>
                </div>
                <div className="col-12 spacing-50"></div>
                <label className="col-12 d-flex justify-content-center bl-medium-abril-text">Delete Everything??</label>
                <div className="d-flex justify-content-center">
                    <button className="button-danger" onClick={handleDelete}>Delete my profile.</button>
                </div>
            </main>

        </>
    );
};

interface ISettings { }

export default Settings;