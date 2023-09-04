import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './style.css';

function Navbar() {
    const [isMenuExpanded, setMenuExpanded] = useState(window.innerWidth < 690);
    const availableMenuOptions = [
        { menuOption: 'Home', route: '/dashboard' },
        { menuOption: 'CV', route: '/cv' },
        { menuOption: 'Projects', route: '/exercises' },
        { menuOption: 'Stack', route: '/tech' },
        { menuOption: 'About', route: '/about' },
    ];

    const toggleMenuExpansion = () => {
        setMenuExpanded(!isMenuExpanded);
    };

    const location = useLocation();
    useEffect(() => {
        const handleResize = () => {
            if (!isMenuExpanded) {
                setMenuExpanded(window.innerWidth >= 690);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuExpanded]);

    return (
        <nav>
            <div className={`menu__container ${isMenuExpanded ? 'expanded' : ''}`}>
                <button onClick={toggleMenuExpansion} style={{ fontWeight: "bold" }}>
                    {isMenuExpanded ? (
                        <KeyboardArrowRightIcon className='menu__arrow-icon' />
                    ) : (
                        <KeyboardArrowLeftIcon className='menu__arrow-icon' />
                    )}
                    Menu
                </button>
                <div className="menu__wrapper">
                    {isMenuExpanded && (
                        <ul className="menu">
                            {availableMenuOptions.map(
                                (option) =>
                                    option.route !== location.pathname && (
                                        <li key={option.menuOption}>
                                            <Link to={option.route}>{option.menuOption}</Link>
                                        </li>
                                    )
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
