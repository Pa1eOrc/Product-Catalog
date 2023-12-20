import { useState } from 'react';
import { Carousel } from '../Carousel';
import { useProducts } from '../ProductContext';
import { ProductSlider } from '../ProductSlider';

export const HotPrices = () => {
  const { hotPriceProducts, getArrayLength } = useProducts();
  const [currentHotPriceSlide, setCurrentHotPriceSlide] = useState(0);
  const length = getArrayLength(hotPriceProducts);

  return (
    <section className="home-page__hot-price">
      <div className="container">
        <h1 className="text text--h2">Hot prices</h1>

        <ProductSlider
          currentSlide={currentHotPriceSlide}
          setCurrentSlide={setCurrentHotPriceSlide}
          length={length}
        />
      </div>

      <Carousel
        products={hotPriceProducts}
        currentSlide={currentHotPriceSlide}
        id="hot-price"
      />
    </section>
  );
};
