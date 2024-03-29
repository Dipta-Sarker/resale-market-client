import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexApi } from '../../AuthContex/AuthContex';

const Header = () => {
    const {user,logOut}=useContext(contexApi)
    const handleSignOut = () =>{
        logOut()
        .then()
        .catch(e =>console.log(e))
      }

    const menue = 
        <>
            <Link to='/'><li><a>Home</a></li></Link>
            
           {user?.email ?
           <></>
           :
           <>
           <Link to='/register'><li><a>Register</a></li></Link>
           <Link to='/login'><li><a>Login</a></li></Link>
           </>

           }
            <Link to='/blog'><li><a>Blog</a></li></Link>

        </>
    
    return (
        <div>
            <div className="navbar text-white  bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           
                           {menue}
                        </ul>
                    </div>
                   <Link to='/'><a className="btn btn-ghost normal-case text-xl">Market</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {menue}
                    </ul>
                </div>
                {user?.email?
                    <div className="navbar-end">
                        <p>{user?.email}</p>
                    <a onClick={handleSignOut} className="btn">SignOut</a>
                </div>:
                <></>

                }
            </div>
        </div>
    );
};

export default Header;