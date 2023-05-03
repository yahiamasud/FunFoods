import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const [error, setError] = useState('');
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handlelogin = (event) => {
        event.preventDefault();
        const Form = event.target;
        const email = Form.email.value;
        const password = Form.password.value;
        console.log(email, password);

         if (password.length < 6) {
            setError("password length not ok ")
            return
        }


        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                Form.reset();
                navigate(from ,{replace:true});

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div >
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <p className='bg-red-100'> No account<Link to="/Regestation"> Regestation page</Link></p>
                            </label>
                            <label className="label">
                                <p className='text-red-500'>{error}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;