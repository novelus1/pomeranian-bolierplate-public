import React, { useEffect, useState } from 'react';
import './styles.css';
import Cookies from 'js-cookie';

const CookieBanner = () => {
  const [isCustomizing, setIsCustomizing] = useState(true);
  const [showLabels, setShowLabels] = useState(false);
  const [isCustomizeClicked, setCustomizeClicked] = useState(false);
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(
    localStorage.getItem('acceptedCookies') === 'true'
  );

  const handleConfirm = () => {
    Cookies.set('acceptedCookies', 'true', { expires: 30 });
    localStorage.setItem('acceptedCookies', 'true');
    setHasAcceptedCookies(true);
    setIsCustomizing(false);
  };

  const handleDecline = () => {
    Cookies.set('acceptedCookies', 'true', { expires: 1 });
    localStorage.setItem('acceptedCookies', 'true');
    setHasAcceptedCookies(true);
    setIsCustomizing(false);
  };

  const handleCustomizeClick = () => {
    setShowLabels((prevShowLabels) => !prevShowLabels);
    setCustomizeClicked(true);
  };

  if (hasAcceptedCookies) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className={`cookie-banner__overlay`}></div>
      <div className="cookie-banner__customization-panel">
        <div className="cookie-banner__text-wrapper">
          <div className="cookie-banner__text-container">
            This website uses cookies, which enables the proper functioning of
            the website and helps in providing services at the highest level.
            You can accept the use of all these files and proceed to the website
            or customize the usage according to your preferences.
          </div>
        </div>
        <div className="cookie-banner__button-wrapper">
          <div className="cookie-banner__button-container">
            <button
              className="cookie-banner__agree-button"
              onClick={handleConfirm}
            >
              Accept All
            </button>
            {isCustomizeClicked ? (
              <button
                className="cookie-banner__save-button"
                onClick={handleConfirm}
              >
                Save Preferences
              </button>
            ) : (
              <button
                className="cookie-banner__customize-button"
                onClick={handleCustomizeClick}
              >
                Customize
              </button>
            )}
            <button
              className="cookie-banner__decline-button"
              onClick={handleDecline}
            >
              Reject All
            </button>
          </div>
          {showLabels && (
            <div className="cookie-banner__label-container">
              <div className="cookie-banner__label-column">
                <label className="cookie-banner__checkbox-label">
                  <span className="cookie-banner__checkbox-custom">
                    <input
                      type="checkbox"
                      name="analytics"
                      className="cookie-banner__checkbox"
                    />
                    <span className="cookie-banner__slider"></span>
                  </span>
                  Analytics
                </label>
                <label className="cookie-banner__checkbox-label">
                  <span className="cookie-banner__checkbox-custom">
                    <input
                      type="checkbox"
                      name="marketing"
                      className="cookie-banner__checkbox"
                    />
                    <span className="cookie-banner__slider"></span>
                  </span>
                  Marketing
                </label>
                <label className="cookie-banner__checkbox-label">
                  <span className="cookie-banner__checkbox-custom">
                    <input
                      type="checkbox"
                      name="functional"
                      className="cookie-banner__checkbox"
                    />
                    <span className="cookie-banner__slider"></span>
                  </span>
                  Functional
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
