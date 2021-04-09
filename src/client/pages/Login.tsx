import * as React from 'react';
import { Link, useHistory } from "react-router-dom"
import Swal from 'sweetalert2'

const Login: React.FC<ILogin> = () => {
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // console.log({ email, password });
        const res = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
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
                        <label htmlFor="password">Password:</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-lg mb-2" placeholder="password" />
                        <div className="d-flex justify-content-end">
                            <button onClick={handleSubmit} className="btn btn-primary btn-lg">Login!</button>
                        </div>
                    </form>

                </div>
                <div className="col-12">
                    Dont have an account?
                    <div className="col-12">
                        <Link to={"/register"}>Register today!</Link>
                    </div>
                </div>
            </section>
        </main>
    )

}

interface ILogin { }

export default Login;
