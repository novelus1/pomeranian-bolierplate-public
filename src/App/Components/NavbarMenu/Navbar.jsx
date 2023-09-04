import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';


function Navbar() {
    const [isMenuExpanded, setMenuExpanded] = useState(false);
    const availableMenuOptions = [
        { menuOption: 'Home', route: '/dashboard' },
        { menuOption: 'CV', route: '/cv' },
        { menuOption: 'Projects', route: '/exercises' },
        { menuOption: 'Tech stack', route: '/tech' },
        { menuOption: 'About', route: '/about' },
    ];

    const toggleMenuExpansion = () => {
        setMenuExpanded(!isMenuExpanded);
    };

    const location = useLocation();

    return (
        <nav>
            <div className={`menu__container ${isMenuExpanded ? 'expanded' : ''}`}>
                <button onClick={toggleMenuExpansion}>Menu</button>
                <div className="menu-wrapper">
                    {isMenuExpanded && (
                        <ul className="menu">
                            {availableMenuOptions.map((option) => (
                                option.route !== location.pathname && (
                                    <li key={option.menuOption}>
                                        <Link to={option.route}>{option.menuOption}</Link>
                                    </li>
                                )
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;






