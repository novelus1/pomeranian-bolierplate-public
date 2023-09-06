import './ProjectCard.css';

const ProjectCard = ({ sectionTitle, description, icon, link }) => {
    return (
        <div className="project-card">
            <h3 className="project-card__title">{sectionTitle}</h3>
            <div className="project-card__icon-wrapper">{icon}</div>
            <p className="project-card__description">{description}</p>
        </div>
    );
};

export default ProjectCard;
