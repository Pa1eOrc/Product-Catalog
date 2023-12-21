import { Link, useLocation, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Product } from '../../type/Product';
import { Button } from '../Button';

import './ProductCard.scss';
import { useProducts } from '../ProductContext';

type Props = {
  product: Product
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    category,
    image,
    itemId,
  } = product;
  const [searchParams] = useSearchParams();
  const { isMobile } = useProducts();
  const location = useLocation();
  const link = location.pathname === '/favourites'
    ? `/favourites/${itemId}`
    : `/${category}/${itemId}`;
  const imgFormat = () => {
    if (category === 'phones') {
      return image.replace(/\.webp$/, '.jpg');
    }

    return image;
  };

  useEffect(() => {
    if (isMobile) {
      const productCard = document.querySelectorAll('.product-card');
      const mobileElementHeight = 440;

      productCard.forEach(p => {
        const element = p as HTMLElement;
        const elementHeight = element.offsetHeight;

        if (elementHeight > mobileElementHeight) {
          const imgContainer = element.querySelector(
            '.product-card__img-container',
          ) as HTMLElement;
          const imgContainerHeight = imgContainer.offsetHeight;

          const height = imgContainerHeight - (
            elementHeight - mobileElementHeight);

          imgContainer.style.height = (`${height}px`);
        }
      });
    }
  }, [isMobile]);

  return (
    <Link
      to={{
        pathname: link,
      }}
      state={{ search: searchParams.toString() }}
      data-cy="cardsContainer"
      className="product-card"
    >
      <div className="product-card__img-container">
        <img
          className="product-card__img"
          src={`/${imgFormat()}`}
          alt={itemId}
        />
      </div>
      <div className="product-card__container">
        <p className="text product-card__title">{name}</p>

        <div
          className="product-card__price-container"
        >
          <h2 className="text text--price">
            {`$${price}`}
          </h2>
          <h2
            className="text text--h2-strikethrough"
          >
            {`$${fullPrice}`}
          </h2>
        </div>

        <div className="product-card__info-container">
          <div className="product-card__info">
            <p className="text text--small text--gray">
              Screen
            </p>
            <p className="text text--small">{screen}</p>
          </div>

          <div className="product-card__info">
            <p className="text text--small text--gray">
              Capacity
            </p>
            <p className="text text--small">{capacity}</p>
          </div>

          <div className="product-card__info">
            <p className="text text--small text--gray">
              RAM
            </p>
            <p className="text text--small">{ram}</p>
          </div>
        </div>

        <Button
          name="cart"
          product={product}
        />
      </div>
    </Link>
  );
};
