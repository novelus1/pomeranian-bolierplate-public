import selfie from '../../../Images/AboutIcons/selfie.jpg';
import location from '../../../Images/AboutIcons/location.svg';
import phone from '../../../Images/AboutIcons/phone.svg';
import email from '../../../Images/AboutIcons/email.png';
import linkedin from '../../../Images/AboutIcons/linkedin.png';
import github from '../../../Images/AboutIcons/github.png';
import './AboutAside.css';

const AboutAside = () => {

    return (
        <div className="aside-container">
            <aside>
                <img className="aside__photo" src={selfie} alt="selfie" />
                <p className="aside__about-description">
                    Hello, I'm Krzysztof Truszkowski, a passionate front-end developer with
                    a diverse background that uniquely shapes my approach to web
                    development.
                </p>
                <div>
                    <div>
                        <a
                            href="https://www.google.com/maps?q=Gdańsk"
                            rel="noopener noreferrer" target="_blank"
                        >
                            <img className="aside__icon" src={location} alt="location" /> Gdańsk
                        </a>
                    </div>
                    <div>
                        <a href="tel:+48533886489" rel="noopener noreferrer" target="_blank">
                            <img className="aside__icon" src={phone} alt="phone" /> +48 533 886
                            489
                        </a>
                    </div>
                    <div>
                        <a
                            href="mailto:krzysztof.truszkowski@outlook.com"
                            rel="noopener noreferrer" target="_blank"
                        >
                            <img className="aside__icon" src={email} alt="email" />{' '}
                            krzysztof.truszkowski@outlook.com
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/novelus1" rel="noopener noreferrer" target="_blank">
                            <img className="aside__icon" src={github} alt="GitHub" /> GitHub
                        </a>
                    </div>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/krzysztof-truszkowski-78b884259/"
                        rel="noopener noreferrer" target="_blank"
                    >
                        <img className="aside__icon" src={linkedin} alt="LinkedIn" /> LinkedIn
                    </a>
                </div>
            </aside>
        </div>
    );
};

export default AboutAside;