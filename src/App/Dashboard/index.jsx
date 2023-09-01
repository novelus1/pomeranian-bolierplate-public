import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import faq from '../Images/faq.svg';
import edit from '../Images/tiles/edit.svg';
import booksaved from '../Images/book-saved.svg';
import code from '../Images/tiles/code.svg';
import cv from '../Images/personalcard.svg';
import { useState } from 'react';

export const Dashboard = () => {
  const [availableCards, setAvailableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={cv} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },

    {
      sectionTitle: 'Ćwiczenia',
      icon: <img src={edit} alt="exercise resume" />,
      description: 'wszystkie wykonane ćwiczenia',
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
      icon: <img src={faq} alt="faq" />,
      description: 'Here you can read more about me!',
      link: '/faq',
    },
  ]);

  return (
    <div className="dashboard">
      <header>
        <div className="dashboard-head">
          <h3 style={{ fontWeight: '600', marginTop: '0.5em' }}>Hello, I'm Krzysiek!</h3>
          <p>Below you can find the most important information about my activity. </p>
        </div>
      </header>
      <div className="cards">
        {availableCards.map((card) => {
          return (
            <div className="cards-main">
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
      {/* <aside>
        <div className="profile-img">
          <img className="img-placeholder" src={selfie} alt="selfie" />
          <h2>
            Krzysztof Truszkowski
          </h2>
          <p>
            <img src={location} alt="location" /> Gdańsk
          </p>
          <p>
            <a href="mailto:krzysztof.truszkowski@outlook.com">
              <img src={email} alt="email" /> krzysztof.truszkowski@outlook.com
            </a>
          </p>
          <p>
            <a href="tel:533886489">
              <img src={phone} alt="phone" /> 533886489
            </a>
          </p>
        </div>
      </aside> */}

    </div>
  );
};
