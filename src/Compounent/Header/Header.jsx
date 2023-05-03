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
                <a className="btn btn-ghost normal-case text-xl">Fun Food</a>
            </div>
            <div className="flex-none justify-around">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="About">About</Link></li>
                    <li><Link to="Blog">Blog</Link></li>

                </ul>
                <div className='flex ms-2'>
                   { user ? <button onClick={handleLogout}>Logout</button>:
                    <Link to="/Login">
                    <button>Login</button>
                    </Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default Header;