import './styles/footer.css';
import React from 'react';
export function AppFooter() {
    const email = "your-email@example.com"; // Replace with your actual email
    const phone = "+1234567890"; // Replace with your actual phone number

    return (
        <footer>
            <div>
                Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
                Europejskiego Funduszu Rozwoju
            </div>
            <a href={`mailto:${email}`}>Email: {email}</a>
            <div>
                Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
            </div>
            <a href={`tel:${phone}`}>Tel: {phone}</a>
        </footer>
    );
}