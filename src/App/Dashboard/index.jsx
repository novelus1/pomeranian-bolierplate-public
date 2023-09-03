import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import edit from '../Images/dashboard-icons/edit.svg';
import code from '../Images/dashboard-icons/code.svg';
import cv from '../Images/dashboard-icons/personalcard.svg';
import about from '../Images/dashboard-icons/about.png';
import { useState } from 'react';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
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
      link: '/exercises',
    },

    // {
    //   sectionTitle: 'Blog',
    //   icon: <img src={booksaved} alt="blog resume" />,
    //   description: 'wpisy blogowe o technologii front-end',
    //   link: '/blog',
    // },

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
      link: 'about',
    },
  ]);

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div className="dashboard__head">
          <h3 className="dashboard__title">Hi, I'm Krzysiek!</h3>
          <p className="dashboard__description">Below you can find the most important information about my activity. </p>
        </div>
      </header>
      <div className="dashboard__card-set">
        {availableCards.map((card) => {
          return (
            <div className="dashboard__card">
              <DashboardCard
                sectionTitle={card.sectionTitle}
                description={card.description}
                link={card.link}
                icon={card.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
