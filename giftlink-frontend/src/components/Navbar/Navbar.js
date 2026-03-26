import React, { useEffect } from 'react';
import { useAppContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { isLoggedIn, setIsLoggedIn } = useAppContext();
    const userName = sessionStorage.getItem('name');

    useEffect(() => {
        const token = sessionStorage.getItem('auth-token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">GiftLink</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home.html">Home</Link> {/* Link to home.html */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/app">Gifts</Link> {/* Updated Link */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/app/search">Search</Link> {/*Search Link */}
                    </li>
                       {/* Show username when logged in */}
                    {isLoggedIn && userName && (
                        <span className="navbar-text">
                            Welcome, {userName}
                        </span>
                    )}
                </ul>
            </div>
        </nav>
    );
}
