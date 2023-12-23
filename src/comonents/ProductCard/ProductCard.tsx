import { Link, useLocation, useSearchParams } from 'react-router-dom';
import React from 'react';
import { Product } from '../../type/Product';
import { Button } from '../Button';

import './ProductCard.scss';

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
  const location = useLocation();
  const link = location.pathname === '/favourites'
    ? `/favourites/${itemId}`
    : `/${category}/${itemId}`;
  const imgFormat = () => {
    if (itemId.includes('iphone-12')
      || itemId.includes('iphone-13')
      || itemId.includes('iphone-14')) {
      return 'img/phones/apple-iphone-7/black/00.jpg';
    }

    if (category === 'phones') {
      return image.replace(/\.webp$/, '.jpg');
    }

    return image;
  };

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
          src={`${imgFormat()}`}
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
