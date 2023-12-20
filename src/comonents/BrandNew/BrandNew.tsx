import { useState } from 'react';
import { Carousel } from '../Carousel';
import { useProducts } from '../ProductContext';
import { ProductSlider } from '../ProductSlider';

export const BrandNew = () => {
  const { newBrandProducts, getArrayLength } = useProducts();
  const [currentBrandNewSlide, setCurrentBrandNewSlide] = useState(0);
  const length = getArrayLength(newBrandProducts);

  return (
    <section className="home-page__brand-new">
      <div className="container">
        <h1 className="text text--h2">
          Brand new models
        </h1>

        <ProductSlider
          currentSlide={currentBrandNewSlide}
          setCurrentSlide={setCurrentBrandNewSlide}
          length={length}
        />
      </div>

      <Carousel
        products={newBrandProducts}
        currentSlide={currentBrandNewSlide}
        id="brand-new"
      />
    </section>
  );
};
