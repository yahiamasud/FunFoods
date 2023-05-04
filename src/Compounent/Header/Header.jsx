import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
    const {user,logOut }=useContext(AuthContext)
    const handleLogout=()=>{
        logOut()
        .then()

    }
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
                <div className='flex ml-5 px-5'>
                    {
                        user &&  <span>{user.name}</span>
                    }
                   { user ? <button onClick={handleLogout} className='font-bold'>Logout</button>:
                    <Link to="/Login">
                    <button className='font-bold'>Login</button>
                    </Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default Header;