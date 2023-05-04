import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import "./login.css"

const Login = () => {

    const { singIn, singInGoogle, gitLoginIn } = useContext(AuthContext);
    const [error, setError] = useState('');



    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handlelogin = (event) => {
        event.preventDefault();
        const Form = event.target;
        const email = Form.email.value;
        const password = Form.password.value;
        console.log(email, password);

        const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (password.length < 6) {
            setError("password length not ok ")
            return
        }
        else if (!regularExpression.test(password)) {
            setError("password should contain atleast one number and one special character")
            return
        }


        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Form.reset();
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
                // ..
            });
    }
    const handleGoogleSingIn = () => {
        singInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGiteLoginIn = () => {
        gitLoginIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="container   bg-base-200">

            <div className='Box p-10 mx-auto' >
                <h1 className='text-5xl font-bold text-center m-2'>LOGING</h1>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
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
                                <p className=''> No account <Link to="/Regestation" className='bg-red-400 rounded p-1'> Regestation page</Link></p>
                            </label>
                            <label className="label">
                                <p className='text-red-500'>{error}</p>
                            </label>
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-primary mx-12" type="submit">Login</button>
                        </div>
                        <div className="form-control ">
                            <button onClick={handleGoogleSingIn} className="btn btn-primary mx-12 " type="button" >googleSingIn</button>
                        </div>
                        <div className="form-control ">
                            <button onClick={handleGiteLoginIn} className="btn btn-primary mx-12 mb-4" type="button">GitLogin</button>
                        </div>
                    </Form>



                </div>
            </div>
        </div>
    );
};

export default Login;