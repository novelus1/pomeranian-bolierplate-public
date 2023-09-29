import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectComponents/ProjectCard/ProjectCard';
import mole from '../Images/ProjectCardIcons//hitthemole.svg';
import form from '../Images/ProjectCardIcons/form.svg';
import memo from '../Images/ProjectCardIcons/memo.svg';
import todo from '../Images/ProjectCardIcons/todo.svg';
import './Projects.css'

const availableCards = [
  {
    sectionTitle: 'Hit The Mole',
    icon: <img src={mole} alt="mole project" />,
    description: 'A game about hitting moles',
    link: '/projects/hit-the-mole',
  },
  {
    sectionTitle: 'Form',
    icon: <img src={form} alt="mole project" />,
    description: 'A product order form template',
    link: '/projects/form',
  },
  {
    sectionTitle: 'To Do List',
    icon: <img src={todo} alt="mole project" />,

    description: 'To do list with completion and editing',
    link: '/projects/to-do-list',
  },

  {
    sectionTitle: 'Memory Game',
    icon: <img src={memo} alt="mole project" />,

    description: 'Card matching memory game',
    link: '/projects/memo-game',
  }


];
export const Projects = () => {
  return (
    <div className="projects">
      <header className="projects__header">
        <div className="projects__head">
          <h3 className="projects__title">My projects</h3>
          <p className="projects__description">Below you can find my recent projects. </p>
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
