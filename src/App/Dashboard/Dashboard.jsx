import DashboardCard from '../Components/SectionComponents/DashboardCard/DashboardCard';
import edit from '../Images/dashboard-icons/edit.svg';
import code from '../Images/dashboard-icons/code.svg';
import cv from '../Images/dashboard-icons/personalcard.svg';
import about from '../Images/dashboard-icons/about.png';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const availableCards = [
  {
    sectionTitle: 'My CV',
    icon: <img src={cv} alt="business card resume" />,
    description: 'CV and experience preview',
    link: '/cv',
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

  {
    sectionTitle: 'About',
    icon: <img src={about} alt="about" />,
    description: 'Here you can see who I am',
    link: '/about',
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
