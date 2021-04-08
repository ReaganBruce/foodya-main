import * as React from 'react';
import { Link, useHistory } from "react-router-dom"

const Register: React.FC<IRegister> = () => {
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // console.log({ email, username, password });
        const res = await fetch("/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, username, password })
        })
        const result = await res.json();
        console.log(result);
        window.localStorage.setItem("token", result);
        history.push("/");
    }

    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <form action="" className="form-group rounded-lg p-3">
                        <label htmlFor="Email">Email:</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control form-control-lg mb-2" placeholder="whoareyou@what.com" />
                        <label htmlFor="Username">Username:</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control form-control-lg mb-2" placeholder="Username" />
                        <label htmlFor="password">Password:</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-lg mb-2" placeholder="password" />
                        <div className="d-flex justify-content-end">
                            <button onClick={handleSubmit} className="btn btn-primary btn-lg">Register!</button>
                        </div>
                    </form>

                </div>
                <div className="col-12">
                    Already have an account?
                    <div className="col-12">
                        <Link to={"/login"}>Login!</Link>
                    </div>
                </div>
            </section>
        </main>
    )

}

interface IRegister { }

export default Register;