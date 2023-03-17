import React from 'react'
import './NavBar.css'
import { useLocation } from 'react-router-dom';

const NavBar = () => {

    const auth = false;

    return (
        <nav className='navbar'>
            <div className='container' style={{
                width: auth ? "100%" : "70%"
            }}>
                <div className='navbar-logo'>
                    asd
                </div>
                <div className="navbar-profile">
                    {
                        auth ?
                            <div className="profile">Profile</div> :
                            <div className='login' >Login</div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar