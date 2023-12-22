import classNames from 'classnames';
import debounce from 'lodash.debounce';

import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useProducts } from '../ProductContext';
import { getSearchWith } from '../../helpers/utils/getSearchWith';
import { SearchParams } from '../../type/SearchParams';

import './Header.scss';

export const Header = () => {
  const {
    carts,
    favourites,
    selectedProductId,
    query,
    links,
    isMobile,
  } = useProducts();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCartPage = location.pathname === '/cart';
  const isProductDetailsPage = links.some(
    link => location.pathname === `/${link}/${selectedProductId}`,
  );
  const getPlaceholderText = location.pathname.split('/')[1];
  const [isMenu, setIsMenu] = useState(false);

  const getLinkClass = (
    { isActive }: { isActive: boolean },
  ) => classNames(
    'navbar__link',
    { 'navbar__link--active': isActive },
  );

  const handleMenuClick = () => {
    if (isMobile) {
      setIsMenu(!isMenu);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setIsMenu(false);
    }
  }, [isMobile]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(query);

  const setDebounceSearchWidth = useCallback(
    debounce((paramsToUpdate: SearchParams) => {
      const search = getSearchWith(searchParams, paramsToUpdate);

      setSearchParams(search);
    }, 1000), [searchParams, location.pathname],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedInput = { query: e.target.value || null };

    setInputValue(e.target.value);
    setDebounceSearchWidth(updatedInput);
  };

  const clearInput = () => {
    setSearchParams(getSearchWith(searchParams, { query: null }));
    setInputValue(query);
  };

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink
          to="/"
          title="Back to home page"
          className="header__logo"
          onClick={handleMenuClick}
        >
          <span className="icon icon--logo" />
        </NavLink>

        <button
          type="button"
          className="header__menu-button"
          title="menu"
          onClick={handleMenuClick}
        >
          <span className={classNames(
            'icon',
            { 'icon--menu': !isMenu },
            { 'icon--cross': isMenu },
          )}
          />
        </button>
      </div>

      <nav className={classNames(
        'navbar',
        { 'navbar--active': isMobile && isMenu },
      )}
      >
        <div className="navbar__first-container">
          <NavLink
            to="/"
            className={getLinkClass}
            onClick={handleMenuClick}
          >
            <p className="navbar__item navbar__item--link">
              Home
            </p>
          </NavLink>

          <NavLink
            to="/phones"
            className={getLinkClass}
            onClick={handleMenuClick}
          >
            <p className="navbar__item navbar__item--link">
              Phones
            </p>
          </NavLink>

          <NavLink
            to="/tablets"
            className={getLinkClass}
            onClick={handleMenuClick}
          >
            <p className="navbar__item navbar__item--link">
              Tablets
            </p>
          </NavLink>

          <NavLink
            to="/accessories"
            className={getLinkClass}
            onClick={handleMenuClick}
          >
            <p className="navbar__item navbar__item--link">
              Accessories
            </p>
          </NavLink>
        </div>

        <div className="navbar__second-container">
          {!isCartPage
            && !isHomePage
            && !isProductDetailsPage
            && (
              <label className="navbar__search-container">
                <input
                  type="search"
                  placeholder={`Search in ${getPlaceholderText}...`}
                  className="navbar__search"
                  value={inputValue}
                  onChange={handleInputChange}
                />

                {!inputValue ? (
                  <span className="icon icon--search" />
                ) : (
                  <button
                    onClick={clearInput}
                    type="submit"
                    title="clear imput"
                    className="navbar__clear-button"
                    data-cy="searchDelete"
                  >
                    <span className="icon icon--cross" />
                  </button>
                )}
              </label>
            )}

          <NavLink
            to="/favourites"
            className={getLinkClass}
            onClick={handleMenuClick}
          >
            <div className="navbar__item navbar__item--icon">
              <span className="icon icon--favourites" />
              {favourites.length > 0 && (
                <span className="navbar__quantity">
                  {favourites.length}
                </span>
              )}
            </div>
          </NavLink>

          <NavLink
            to="/cart"
            className={getLinkClass}
            onClick={handleMenuClick}
          >
            <div className="navbar__item navbar__item--icon">
              <span className="icon icon--cart" />
              {carts.length > 0 && (
                <span className="navbar__quantity">
                  {carts.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
