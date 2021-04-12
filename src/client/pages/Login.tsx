import * as React from 'react';
import { Link, useHistory } from "react-router-dom"
import Swal from 'sweetalert2';

const Login: React.FC<ILogin> = () => {
    const history = useHistory();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (username === '' || password === '') {

            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Sorry, you must enter information!`,
                imageUrl: './assets/cancel.png',
                imageWidth: 400,
                imageHeight: 400,
                showConfirmButton: false,
                timer: 2500
            })
            return;
        } else {

            const res = await fetch("/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })
            const result = await res.json();
            console.log(result);
            window.localStorage.setItem("token", result);
            history.push("/");

            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Thank you for signing in ${username}!`,
                imageUrl: './assets/cool-hair-guy.png',
                imageWidth: 400,
                imageHeight: 400,
                showConfirmButton: false,
                timer: 2500
            })
        }

    }

    return (
        <>
            <main className="container">
                <section className="row">
                    <div id="user-register-container" className="col-md-12 d-flex justify-content-center">
                        <div id="user-register-div" className="row">
                            <div id="user-register-title">
                                <h4 id="foodya-register">FoodYA!</h4>
                            </div>

                            <div id="register-user-div-input">
                                <form id="user-form">
                                    <div>
                                        <label id="user-email-label">USERNAME</label>
                                    </div>
                                    <input
                                        className="form-control"
                                        id="user-name-input"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        type="text"
                                        placeholder="Username..."
                                    />
                                    <div>
                                        <label id="user-password-label">PASSWORD</label>
                                    </div>
                                    <input
                                        className="form-control"
                                        id="user-password-input"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password..."
                                    />

                                    <div className="d-flex justify-content-center">
                                        <button id="reg-btn" onClick={handleSubmit} className="btn btn-warning btn-lg">Login!</button>

                                    </div>

                                </form>

                                <div id="already-account-container" className="container">
                                    <h4 id="already-account-text">
                                        Don't have an Account?
                        </h4>
                                    <Link to={'/register'} id="user-login-button" className="btn btn-warning">
                                        Register!
                            </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}



// <main className="container">
// <section className="row">
//     <div className="col-12">
//         <form action="" className="form-group rounded-lg p-3">
//             <label htmlFor="Email">Email:</label>
//             <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control form-control-lg mb-2" placeholder="whoareyou@what.com" />
//             <label htmlFor="password">Password:</label>
//             <input value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-lg mb-2" placeholder="password" />
//             <div className="d-flex justify-content-end">
//                 <button onClick={handleSubmit} className="btn btn-primary btn-lg">Login!</button>
//             </div>
//         </form>

//     </div>
//     <div className="col-12">
//         Dont have an account?
//         <div className="col-12">
//             <Link to={"/register"}>Register today!</Link>
//         </div>
//     </div>
// </section>
// </main>






interface ILogin { }

export default Login;
