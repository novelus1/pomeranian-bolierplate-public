import './styles/AppFooter.css';

const email = 'krzysztof.truszkowski@outlook.com';
const phone = '+48 533 886 489';

export function AppFooter() {

    return (
        <footer>
            <div className="footer__text">
                The project received funding from the European Union's European Regional
                Development Fund as part of the grant project 'Invest in Pomerania 2020.
            </div>
            <div className="footer__info">
                <a href={`mailto:${email}`} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Email: {email}</a>
                <a href={`tel:${phone}`} style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Tel: {phone}</a>
            </div>
        </footer>
    );
}
