import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Navbar.css';

const availableMenuOptions = [
    { menuOption: 'Home', route: '/dashboard' },
    { menuOption: 'CV', route: '/cv' },
    { menuOption: 'Projects', route: '/projects' },
    { menuOption: 'Stack', route: '/tech' },
    { menuOption: 'About', route: '/about' },
];
function Navbar() {
    const [isMenuExpanded, setMenuExpanded] = useState(window.innerWidth < 690);
    const toggleMenuExpansion = () => {
        setMenuExpanded(!isMenuExpanded);
    };

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
                <button onClick={toggleMenuExpansion} style={{ fontWeight: 'bold' }}>
                    {isMenuExpanded ? (
                        <KeyboardArrowRightIcon className="menu__arrow-icon" />
                    ) : (
                        <KeyboardArrowLeftIcon className="menu__arrow-icon" />
                    )}
                    Menu
                </button>
                <div className="menu__wrapper">
                    {isMenuExpanded && (
                        <ul className="menu">
                            {availableMenuOptions.map((option) => (
                                <li key={option.menuOption}>
                                    <NavLink to={option.route} className="menu__current-link">{option.menuOption}</NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
