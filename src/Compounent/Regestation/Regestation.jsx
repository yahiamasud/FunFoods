import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';


const Regestation = () => {

    const [error , setError]=useState('');
    const { createUser } = useContext(AuthContext);

    const handleSingUp = (event) => {
        event.preventDefault();
        const Form = event.target;
        const email = Form.email.value;
        const password = Form.password.value;
        const name = Form.name.value;
        const photo = Form.name.value;
        
        // const photo = Form.photo.value;
        console.log(email, password, name)

    
        if(password.length < 6){
            setError("password length not ok ")
            return
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className=" container   flex justify-center min-h-screen bg-base-200">
            <div >
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo" name='photo' className="input input-bordered" required />
                        </div>
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
                                <label className="label">
                                    <p>alraey acount:- <Link to="/Login"> login page</Link></p>
                                </label>
                            </label>
                            <label className="label">
                                <p className='text-red-500'>{error}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SingUp</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Regestation;