import React, { useContext } from 'react';
import './Login.css'
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from "react-router-dom";

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' id='email'  required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password'  required/>
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </div>
            </form>
            <p><small>New to Ema Jhon? Please <Link to="/signup">Sign Up</Link></small></p>
        </div>
    );
};

export default Login;