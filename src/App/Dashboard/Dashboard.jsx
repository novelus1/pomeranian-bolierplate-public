import DashboardCard from '../Components/SectionComponents/DashboardCard/DashboardCard';
import edit from '../Images/DashboardCardIcons/edit.svg';
import code from '../Images/DashboardCardIcons/code.svg';
import about from '../Images/DashboardCardIcons/about.png';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const availableCards = [
  {
    sectionTitle: 'About',
    icon: <img src={about} alt="about" />,
    description: 'My personal information and CV',
    link: '/about',
  },
  {
    sectionTitle: 'Projects',
    icon: <img src={edit} alt="exercise resume" />,
    description: 'My projects and exercises',
    link: '/projects',
  },
  {
    sectionTitle: 'Tech stack',
    icon: <img src={code} alt="tech stack resume" />,
    description: 'My current technology stack',
    link: '/tech',
  },


];
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div className="dashboard__head">
          <h3 className="dashboard__title">Hi, I'm Krzysiek!</h3>
          <p className="dashboard__description">Below you can find the most important information about my activity. </p>
        </div>
      </header>
      <div className="dashboard__card-set">
        {availableCards.map((card, index) => (
          <div className="dashboard__card" key={index}>
            <Link to={card.link}>
              <DashboardCard
                sectionTitle={card.sectionTitle}
                description={card.description}
                icon={card.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
