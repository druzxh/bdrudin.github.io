import React from 'react';
import { NavLink } from 'react-router-dom';

function ExpandedNavbar() {
    return (
        <div className="expanded-navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/services">
                        Services
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/experience">
                        Experiences
                    </NavLink>
                </li>
            </ul>
            <ul className="ms-auto navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink
                        to="https://drive.google.com/file/d/1R5A0Fs2mVht_g-Wf3Ly_VdsqtJc-cr9z/view?usp=share_link"
                        target="_blank"
                        className="nav-link"
                    >
                        <i className="fa-regular fa-file"></i> Resume
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="https://github.com/druzxh" className="nav-link">
                        <i className="fa-brands fa-github"></i> Github
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default ExpandedNavbar;
