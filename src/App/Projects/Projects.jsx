import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectComponents/ProjectCards/ProjectCards';
import './styles.css'

export const Projects = () => {
  const availableCards = [
    {
      sectionTitle: 'Hit The Mole',
      description: 'A game about hitting moles!',
      link: '/projects/hit-the-mole',
    },

    {
      sectionTitle: 'Memory Game',
      description: 'Memo Game',
      link: '/projects/memo-game',
    },
    {
      sectionTitle: 'Form',
      description: 'Form with API',
      link: '/projects/form',
    },

    {
      sectionTitle: 'To Do List',
      description: 'To Do List',
      link: '/projects/to-do-list',
    },
  ];
  return (
    <div className="projects">
      <header className="projects__header">
        <div className="projects__head">
          <h3 className="projects__title">My projects</h3>
          <p className="projects__description">Below you can find my projects. </p>
        </div>
      </header>
      <div className="projects__card-set">
        {availableCards.map((card, index) => (
          <div className="project__card" key={index}>
            <Link to={card.link}>
              <ProjectCard
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
