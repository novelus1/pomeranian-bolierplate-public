import './styles.css';
import DashboardCard from '../Components/DashboardCard/DashboardCard';
import faq from '../Images/faq.svg';
import edit from '../Images/tiles/edit.svg';
import booksaved from '../Images/book-saved.svg';
import code from '../Images/tiles/code.svg';
import hand from '../Images/hand-icon.png';
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
      sectionTitle: ' Ćwiczenia',
      icon: <img src={edit} alt="exercise resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/exercises',
    },

    {
      sectionTitle: 'Blog',
      icon: <img src={booksaved} alt="blog resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },

    {
      sectionTitle: 'Tech stack',
      icon: <img src={code} alt="tech stack resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },

    {
      sectionTitle: 'FAQ',
      icon: <img src={faq} alt="faq resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);

  return (
    <div className="dashboard">
      <header>
        <div className="dashboard-head">
          <img className="hand-icon" src={hand} alt="zdjecie reki" style={{ width: '22px', height: '22px' }} />
          <h3 style={{ marginLeft: '10px' }}>Hej, tu Krzysiek!</h3>
        </div>
        <p>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności
        </p>
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
      <aside>
        <div className="profile-img">
          <img className="img-placeholder" src={hand} alt="my photo" />
          <h2>Krzysztof Truszkowski</h2>
          <p>Gdańsk</p>
        </div>
        <div className="info">
          <p>e-mail:</p>
          <p style={{ marginBottom: '30px' }}>
            <a href="mailto:krzysztof.truszkowski@outlook.com">
              krzysztof.truszkowski@outlook.com
            </a>
          </p>
          <p>telefon:</p>
          <p>
            <a href="tel:533886489">533 886 489</a>
          </p>
        </div>
      </aside>
    </div>
  );
};
