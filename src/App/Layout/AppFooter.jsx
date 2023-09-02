import './styles/footer.css';
import React from 'react';
export function AppFooter() {
    const email = 'krzysztof.truszkowski@outlook.com';
    const phone = '+48 533 886 489';

    return (
        <footer>
            <div className="footer__text">
                The project received funding from the European Union's European Regional
                Development Fund as part of the grant project 'Invest in Pomerania 2020.
            </div>
            <div className="footer__info">
                <a href={`mailto:${email}`}>Email: {email}</a>
                <a href={`tel:${phone}`}>Tel: {phone}</a>
            </div>
        </footer>
    );
}
