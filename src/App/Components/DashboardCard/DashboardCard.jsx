import './styles.css';

import React from 'react';

const DashboardCard = ({ sectionTitle, description, icon, link }) => {
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-card__title">{sectionTitle}</h3>
      <div className="dashboard-card__icon-wrapper">{icon}</div>
      <p className="dashboard-card__description">{description}</p>
      <span className="dashboard-card__link" href={link}>Read more</span>
    </div>
  );
};

export default DashboardCard;
