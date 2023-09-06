import startItLogo from '../Images/start-it-logo.svg';
import { Link } from 'react-router-dom';
import Navbar from '../Components/SectionComponents//NavbarMenu/Navbar';
import './styles/AppHeader.css';

export function AppHeader() {
  return (
    <header className="navigation">
      <div>
        <Link to="/dashboard">
          <img src={startItLogo} className="logo" alt="logo" srcSet="" />
        </Link>
      </div>
      <div className="navigation__menu">
        <Navbar />
      </div>
    </header>
  );
}