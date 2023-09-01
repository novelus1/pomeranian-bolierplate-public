import './styles.css';

import React from 'react';

const DashboardCard = ({ sectionTitle, description, icon, link }) => {
  return (
    <div className="dashboard-card">
      <h3>{sectionTitle}</h3>
      <div className="icon-wrapper">{icon}</div>
      <p>{description}</p>
      <a href={link}>Read more</a>
    </div>
  );
};

export default DashboardCard;
