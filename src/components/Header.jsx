import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    function toggleHeaderFixed(e) {
        console.log(e)
        setIsHeaderFixed(!isHeaderFixed);
    }

    const location = useLocation();
    const isActive = location.pathname === '/';


    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    {isActive ? (
                        <img src="/logo-active.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    ) : (
                        <img src="/logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                    )}
                </NavLink>
                <button onClick={toggleHeaderFixed} className="navbar-toggler mr-3" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle" aria-controls="navToggle" aria-expanded={isHeaderFixed} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navToggle">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/experience">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <ul className="ms-auto navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/Badrudin_Resume.pdf" target="_blank" className="nav-link"><i className="fa-regular fa-file"></i> Resume</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to='https://github.com/druzxh' target="_blank" className="nav-link"><i className="fa-brands fa-github"></i> Github</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
