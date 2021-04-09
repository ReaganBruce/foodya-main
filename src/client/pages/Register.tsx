import * as React from 'react';
import { Link, useHistory } from "react-router-dom"
import Swal from 'sweetalert2'
import '../scss/register.scss';

const Register: React.FC<IRegister> = () => {
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let emailCheck: boolean = email.includes('@')

        if (username === '' || email === '' || password === '' || !emailCheck) {
            e.preventDefault();
            await Swal.fire({
                icon: 'error',
                title: 'Sorry, you must enter information!',
                imageUrl: './assets/crashed-truck.png',
                imageWidth: 550,
                imageHeight: 250,
                timer: 2500
            })
            return;

        } else {
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

            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Welcome ${username}!`,
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
                                        <label id="user-email-label">EMAIL</label>
                                    </div>
                                    <input className="" id="user-email-input"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        type="email"
                                        placeholder="Email..."
                                    />

                                    <div>
                                        <label id="user-name-label">USERNAME</label>
                                    </div>
                                    <input id="user-name-input"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        type="text"
                                        placeholder="Tell us who you are..."
                                    />

                                    <div>
                                        <label id="user-password-label">PASSWORD</label>
                                    </div>
                                    <input id="user-password-input"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        type="password"
                                        placeholder="Password..."
                                    />
                                    
                                    <div id="truck-wrapper">
                                        <div id="moving-truck">
                                        <img id="moving-img" src="../assests/thisone.png"></img>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button id="reg-btn" onClick={handleSubmit}  className="btn btn-warning btn-lg">Register!</button>
                                        
                                    </div>

                                </form>
                            </div>
                            {/* <h4 id="already-account">
                                Already have an account?
                                </h4>
                            <Link to={'/login'} id="vendor-submit-button" className="btn btn-warning btn-lg">
                                Login!
                                    </Link> */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}



{/* <main className="container">
            <section className="row">
                <div className="col-12">
                    <form action="" className="form-group rounded-lg p-3">
                        <label htmlFor="Email">Email:</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control form-control-lg mb-2" placeholder="whoareyou@what.com" />
                        <label htmlFor="Username">Username:</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control form-control-lg mb-2" placeholder="Username" />
                        <label htmlFor="password">Password:</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control form-control-lg mb-2" placeholder="password" />
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
        </main> */}




interface IRegister { }

export default Register;