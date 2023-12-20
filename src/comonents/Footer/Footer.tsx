import { Link } from 'react-router-dom';

import './Footer.scss';

export const Footer = () => {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <footer className="footer">
      <Link
        to="/"
        title="Back to home page"
        className="icon icon--footer-logo"
      />

      <div className="footer__link-container">
        <Link
          className="text text--small text--gray footer__link"
          to="https://github.com/Pa1eOrc/product_catalog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        <Link
          to="/"
          className="text text--small text--gray footer__link"
        >
          Contacts
        </Link>
        <Link
          to="/"
          className="text text--small text--gray footer__link"
        >
          Rights
        </Link>
      </div>

      <div className="footer__button-container">
        <p className="text text--small text--gray">Back to top</p>
        <button
          className="footer__button"
          type="button"
          title="Back to top"
          onClick={handleButtonClick}
        >
          <span className="icon icon--arrow" />
        </button>
      </div>
    </footer>
  );
};
