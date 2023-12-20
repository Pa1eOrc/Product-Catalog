import classNames from 'classnames';

import { Link, useParams, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useProducts } from '../../comonents/ProductContext';
import { Loader } from '../../comonents/Loader';
import { ProductSlider } from '../../comonents/ProductSlider';
import { Carousel } from '../../comonents/Carousel';
import { About } from '../../comonents/About';
import { Button } from '../../comonents/Button';
import { Option } from '../../comonents/Options';
import { BackButton } from '../../comonents/BackButton';

import './ProductDetailsPage.scss';

export const ProductDetailsPage = () => {
  const {
    productDetails,
    selectedProduct,
    setSelectedProductId,
    isLoading,
    randomProducts,
    getArrayLength,
    isProductNotFound,
    isMobile,
  } = useProducts();
  const { productId } = useParams();
  const { state } = useLocation();
  const location = useLocation();

  const {
    capacityAvailable,
    colorsAvailable,
    images,
    description,
    resolution,
    processor,
    camera,
    zoom,
    cell,
    color,
    capacity,
  } = productDetails;

  const {
    price,
    fullPrice,
    screen,
    image,
    ram,
    name,
  } = selectedProduct;

  const [selectedImg, setSelectedImg] = useState(image);
  const getBackButtonName = location.pathname.split('/')[1];
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = getArrayLength(randomProducts);
  const [isCapacity, setIsCapacity] = useState(capacity);
  const [isColor, setIsColor] = useState(color);

  useEffect(() => {
    setSelectedImg(image);
    setIsCapacity(capacity);
    setIsColor(color);
  }, [image, capacity, color]);

  useEffect(() => {
    if (productId) {
      setSelectedProductId(productId);
    }

    return () => {
      setSelectedProductId('');
    };
  }, [productId, setSelectedProductId]);

  const handleImageClick = (e: React.MouseEvent, img: string) => {
    e.preventDefault();
    setSelectedImg(img);
  };

  const renderContext = () => {
    if (isProductNotFound) {
      return (
        <div>
          <BackButton />
          <h2>
            Phone was not found
          </h2>
        </div>
      );
    }

    return (
      <>
        <div
          className="details__bread-crumbs"
          data-cy="breadCrumbs"
        >
          <Link to="/">
            <span className="icon icon--home" />
          </Link>

          <span className="icon icon--arrow-dis icon--next" />

          <Link
            to={{
              pathname: '..',
              search: state?.search,
            }}
            className="text text--small"
          >
            {getBackButtonName}
          </Link>

          <span className="icon icon--arrow-dis icon--next" />

          <p className="text text--small text--gray">
            {name.toLowerCase()}
          </p>
        </div>

        <BackButton />

        <h1 className="details__title text text--h2">
          {name.toLowerCase()}
        </h1>

        <section className="details__main-container">
          {isMobile && (
            <div className="details__selected-img-container">
              <img
                src={`api/${selectedImg}`}
                alt="img"
                className="details__img details__img--selected"
              />
            </div>
          )}
          <ul className="details__images-container">
            {images.map((img) => (
              <li
                key={img}
                className={classNames(
                  'details__image-container',
                  {
                    'details__image-container--selected':
                      selectedImg === img,
                  },
                )}
              >
                <a
                  href="/"
                  type="button"
                  onClick={(e) => handleImageClick(e, img)}
                >
                  <img
                    className="details__img"
                    src={`api/${img}`}
                    alt="img"
                  />
                </a>
              </li>
            ))}
          </ul>

          {!isMobile && (
            <div className="details__selected-img-container">
              <img
                src={`api/${selectedImg}`}
                alt="img"
                className="details__img details__img--selected"
              />
            </div>
          )}

          <div className="details__inner-container">
            <Option
              capacityAvailable={capacityAvailable}
              colorsAvailable={colorsAvailable}
              isCapacity={isCapacity}
              setIsCapacity={setIsCapacity}
              isColor={isColor}
              setIsColor={setIsColor}
            />

            <div className="details__info-container">
              <div className="details__price-container">
                <p className="text text--h2">{`$${fullPrice}`}</p>

                <p className={classNames(
                  'text',
                  'text--h2',
                  'text--h2-strikethrough',
                  'text--gray',
                )}
                >
                  {`$${price}`}
                </p>
              </div>

              <Button
                name="details"
                product={selectedProduct}
              />

              <ul className="details__info-container">
                <li className="details__info">
                  <p className="text text--gray text--small">
                    Screen
                  </p>
                  <p className="text text--small">
                    {screen}
                  </p>
                </li>
                <li className="details__info">
                  <p className="text text--gray text--small">
                    Resolution
                  </p>
                  <p className="text text--small">
                    {resolution}
                  </p>
                </li>
                <li className="details__info">
                  <p className="text text--gray text--small">
                    Processor
                  </p>
                  <p className="text text--small">
                    {processor}
                  </p>
                </li>
                <li className="details__info">
                  <p className="text text--gray text--small">
                    RAM
                  </p>
                  <p className="text text--small">
                    {ram}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <About
          description={description}
          screen={screen}
          resolution={resolution}
          processor={processor}
          ram={ram}
          capacity={capacity}
          camera={camera}
          zoom={zoom}
          cell={cell}
        />

        <div className="details__carousel-container">
          <div className="details__carousel-top">
            <h2 className="text text--h2">You may also like</h2>
            <ProductSlider
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              length={length}
            />
          </div>

          <Carousel
            products={randomProducts}
            currentSlide={currentSlide}
            id="random"
          />
        </div>
      </>
    );
  };

  return (
    <section className="details">
      {isLoading ? (
        <Loader />
      ) : (
        renderContext()
      )}
    </section>
  );
};
