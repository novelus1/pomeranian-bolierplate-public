import React, { useEffect } from 'react';
import { useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import { ArrowDropUp } from '@mui/icons-material';
import TechstackCard from '../Components/TechstackCard/TechstackCard';
import css from '../Images/techstack-icons/css.svg';
import discord from '../Images/techstack-icons/discord.png';
import firebase from '../Images/techstack-icons/firebase.svg';
import git from '../Images/techstack-icons/git.svg';
import github from '../Images/techstack-icons/github.svg';
import html from '../Images/techstack-icons/html.svg';
import javascript from '../Images/techstack-icons/javascript.svg';
import jest from '../Images/techstack-icons/jest.svg';
import jira from '../Images/techstack-icons/jira.png';
import redux from '../Images/techstack-icons/redux.png';
import react from '../Images/techstack-icons/react.svg';
import typescript from '../Images/techstack-icons/typescript.svg';
import vscode from '../Images/techstack-icons/vscode.png';
import asana from '../Images/techstack-icons/asana.png';
import storybook from '../Images/techstack-icons/storybook.png';
import slack from '../Images/techstack-icons/slack.png';
import msteams from '../Images/techstack-icons/msteams.png';
import mui from '../Images/techstack-icons/mui.png';

import './style.css';

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