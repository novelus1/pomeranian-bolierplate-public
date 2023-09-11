import { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { ArrowDropUp } from '@mui/icons-material';
import TechstackCard from '../Components/SectionComponents/TechstackCard/TechstackCard';
import css from '../Images/TechstackCardIcons/css.svg';
import discord from '../Images/TechstackCardIcons/discord.png';
import firebase from '../Images/TechstackCardIcons/firebase.svg';
import git from '../Images/TechstackCardIcons/git.svg';
import github from '../Images/TechstackCardIcons/github.svg';
import html from '../Images/TechstackCardIcons/html.svg';
import javascript from '../Images/TechstackCardIcons/javascript.svg';
import jest from '../Images/TechstackCardIcons/jest.svg';
import jira from '../Images/TechstackCardIcons/jira.png';
import redux from '../Images/TechstackCardIcons/redux.png';
import react from '../Images/TechstackCardIcons/react.svg';
import typescript from '../Images/TechstackCardIcons/typescript.svg';
import vscode from '../Images/TechstackCardIcons/vscode.png';
import asana from '../Images/TechstackCardIcons/asana.png';
import storybook from '../Images/TechstackCardIcons/storybook.png';
import slack from '../Images/TechstackCardIcons/slack.png';
import msteams from '../Images/TechstackCardIcons/msteams.png';
import mui from '../Images/TechstackCardIcons/mui.png';

import './Techstack.css';

const availableCards = [
  {
    categoryTitle: 'Development Stack',
    cards: [
      {
        icon: <img src={html} alt="html" />,
        description: 'HTML',
      },
      {
        icon: <img src={css} alt="css" />,
        description: 'CSS',
      }, {
        icon: <img src={javascript} alt="js" />,
        description: 'JavaScript',
      }, {
        icon: <img src={typescript} alt="ts" />,
        description: 'TypeScript',
      }, {
        icon: <img src={react} alt="react" />,
        description: 'React',
      }, {
        icon: <img src={redux} alt="redux" />,
        description: 'Redux',
      }, {
        icon: <img src={git} alt="git" />,
        description: 'Git',
      }, {
        icon: <img src={github} alt="github" />,
        description: 'GitHub',
      }, {
        icon: <img src={jest} alt="jest" />,
        description: 'Jest',
      }, {
        icon: <img src={storybook} alt="storybook" />,
        description: 'Storybook',
      }, {
        icon: <img src={mui} alt="mui" />,
        description: 'MUI',
      }, {
        icon: <img src={vscode} alt="vsc" />,
        description: 'VS Code',
      },
    ],
  },
  {
    categoryTitle: 'Project Management & Cloud',
    cards: [
      {
        icon: <img src={jira} alt="jira" />,
        description: 'Jira',
      }, {
        icon: <img src={asana} alt="asana" />,
        description: 'Asana',
      }, {
        icon: <img src={firebase} alt="firebase" />,
        description: 'Firebase',
      },


    ],
  },
  {
    categoryTitle: 'Communication Tools',
    cards: [
      {
        icon: <img src={discord} alt="discord" />,
        description: 'Discord',
      },
      {
        icon: <img src={slack} alt="slack" />,
        description: 'Slack',
      }, {
        icon: <img src={msteams} alt="msteams" />,
        description: 'MS Teams',
      }
    ],
  }
]
export const Techstack = () => {


  const [expandedCategories, setExpandedCategories] = useState({});
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleCategoryExpansion = (categoryTitle) => {
    if (isMobileView) {
      setExpandedCategories((prevState) => ({
        ...prevState,
        [categoryTitle]: !prevState[categoryTitle],
      }));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 300);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobileView) {
      const expandedCategoriesDefault = {};
      availableCards.forEach((category) => {
        expandedCategoriesDefault[category.categoryTitle] = true;
      });
      setExpandedCategories(expandedCategoriesDefault);
    } else {
      setExpandedCategories({});
    }
  }, [isMobileView, availableCards]);

  return (
    <div className="techstack__table">
      {availableCards.map((category) => (
        <div className="techstack__category" key={category.categoryTitle}>
          <h2
            onClick={() => toggleCategoryExpansion(category.categoryTitle)}
            className={`category-title ${expandedCategories[category.categoryTitle]}`}
          >
            <div>
              {category.categoryTitle}{' '}
              {isMobileView && (
                <span className="arrow">
                  {expandedCategories[category.categoryTitle] ? <ArrowDropUp /> : <ArrowDropDown />}
                </span>
              )}
            </div>
          </h2>
          {expandedCategories[category.categoryTitle] && (
            <div className="techstack__card-set">
              {category.cards.map((card, index) => (
                <div className="techstack__card" key={index}>
                  <TechstackCard description={card.description} icon={card.icon} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};