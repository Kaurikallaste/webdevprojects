import React from 'react';

import { Link } from 'react-router-dom';


const currentUrl = (url) => {
    if (window.location.pathname === url) {
        return "navbar-item highlighted";
    }
    return "navbar-item";
};

const Navbar = () => {
    return (
        <div className="navbar center">
            <Link to='/' className={currentUrl("/")}>Avaleht</Link>
            <Link to='/posts' className={currentUrl("/posts")}>Postitused</Link>
            <Link to='/contact' className={currentUrl("/contact")}>Kontakt</Link>
        </div >
    );
}

export default Navbar;