import './styles.css';

import React from 'react';

const TechstackCard = ({ sectionTitle, description, icon }) => {
    return (
        <div className="techstack-card">
            <h3 className="techstack-card__title">{sectionTitle}</h3>
            <div className="techstack-card__icon-wrapper">{icon}</div>
            <p className="techstack-card__description">{description}</p>
        </div>
    );
};

export default TechstackCard;
