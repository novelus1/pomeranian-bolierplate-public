import selfie from '../../../Images/about-icons/selfie.jpg';
import location from '../../../Images/about-icons/location.svg';
import phone from '../../../Images/about-icons/phone.svg';
import email from '../../../Images/about-icons/email.png';
import linkedin from '../../../Images/about-icons/linkedin.png';
import github from '../../../Images/about-icons/github.png';
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