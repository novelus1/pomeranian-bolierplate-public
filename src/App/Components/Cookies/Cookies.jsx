import React, { useState } from 'react';
import './style.css';
import cookies from '../../Images/cookies.svg';

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleConfirm = () => {
    setIsVisible(false);
  };
  const handleAgreementCustomization = () => {};

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookies-agreement">
      <div className="left">
        <div className="text-wrapper">
          <img className="cookies-icon" src={cookies} alt="cookies icon" />
          <p>
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować użycie do swoich
            preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
            zgody”, aby następnie wybrać te które odpowiadają Twoim
            indywidualnym preferencjom.
          </p>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="agree" onClick={handleConfirm}>
          W porządku
        </button>
        <button className="customize" onClick={handleAgreementCustomization}>
          Dopasuj zgody
        </button>
      </div>
    </div>
  );
};

export default Cookies;
