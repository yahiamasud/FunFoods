import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { BsPersonCircle } from "react-icons/bs";
import './head.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()

    }
    console.log(user);

    return (
        <div className="navbar mt-2 bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl font-bold">Fun Food</a>
            </div>
            <div className="flex-none justify-around">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className='font-bold'>Home</Link></li>
                    <li><Link to="Blog" className='font-bold'>Blog</Link></li>

                </ul>
                <div className='flex px-5'>
                    {
                        user && <span className='mx-3'><img className="imgProfile  " src={user.photoURL} alt="" /></span>
                    }
                    {user ?
                        <button onClick={handleLogout} className=' font-bold'>  Logout</button>
                        :

                        <Link to="/Login">
                            <div className='text-center flex '> <button className='btn btn-primary'>login</button></div>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;