import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import './styles.css';

const availableTexts = [
    {
        textTitle: 'My Journey',
        textParagraph:
            'My journey into the tech world began with a love for computer games and a fascination with technology. This early curiosity eventually led me to a pivotal decision - enrolling in a specialized front-end development bootcamp. Here, I honed my skills in web development, learning the art of creating user-friendly and visually appealing interfaces using i.a. HTML, CSS, JavaScript, and React.',
    },
    {
        textTitle: 'Diverse Perspectives',
        textParagraph:
            'Before diving into web development, I gained valuable experience in a multicultural and English-driven customer support environment. This background taught me the importance of empathetic problem-solving and user-centered design, skills that I seamlessly integrate into my work as a front-end developer.',
    },
    {
        textTitle: 'Academic Foundation',
        textParagraph:
            "Currently, I'm in my first year of studying Computer Science, which complements my practical skills with a strong theoretical foundation. This academic pursuit ensures I stay updated with industry trends and enables me to approach challenges with a well-rounded perspective.",
    },
    {
        textTitle: 'Language Connection',
        textParagraph:
            'My journey is uniquely shaped by my academic background in English Philology, which provides me with a deep appreciation for language, communication, and critical thinking. This foundation not only enhances my ability to craft clear and concise code but also elevates the user experience by ensuring that your web content resonates with your audience.',
    },
    {
        textTitle: 'Continuous Learner',
        textParagraph:
            "In the dynamic tech landscape, I'm committed to lifelong learning. I actively engage in online courses, workshops, and community events to stay at the forefront of emerging technologies, ensuring I deliver the best solutions to your projects.",
    },
    {
        textTitle: "Let's Connect!",
        textParagraph:
            "I'm excited about the endless possibilities that front-end development offers. Whether you're looking to build a stunning website, optimize user experiences, or bring your web project to life, I'm here to help. Let's collaborate and turn your ideas into reality. Thank you for taking the time to explore my portfolio. I look forward to working together on your next web development project!",
    },
];
export const AboutSections = () => {

    const [expandedTexts, setExpandedTexts] = useState({});
    const [isAnySectionExpanded, setIsAnySectionExpanded] = useState(false);
    const [marginApplied, setMarginApplied] = useState(false);

    const toggleTextExpansion = (textTitle) => {
        setExpandedTexts((prevState) => ({
            ...prevState,
            [textTitle]: !prevState[textTitle],
        }));
    };

    useEffect(() => {
        if (availableTexts.length > 0) {
            const expandedTextsDefault = {};
            availableTexts.forEach((text) => {
                expandedTextsDefault[text.textTitle] = false;
            });
            setExpandedTexts(expandedTextsDefault);
        } else {
            setExpandedTexts({});
        }
    }, [availableTexts]);

    useEffect(() => {
        const anySectionExpanded = Object.values(expandedTexts).some(
            (value) => value
        );
        setIsAnySectionExpanded(anySectionExpanded);

        if (anySectionExpanded && !marginApplied) {
            setMarginApplied(true);
        }
    }, [expandedTexts, marginApplied]);

    return (
        <div>
            <div
                className={`about__container ${isAnySectionExpanded ? 'expanded' : ''}`}
            >
                {availableTexts.map((text) => (
                    <div
                        className={`about__text ${expandedTexts[text.textTitle] ? 'expanded' : ''
                            }`}
                        key={text.textTitle}
                    >
                        <h1 onClick={() => toggleTextExpansion(text.textTitle)}>
                            {text.textTitle}
                            {expandedTexts[text.textTitle] ? (
                                <ArrowDropUpIcon className="arrow-icon" />
                            ) : (
                                <ArrowDropDownIcon className="arrow-icon" />
                            )}
                        </h1>
                        {expandedTexts[text.textTitle] && <p>{text.textParagraph}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutSections;
