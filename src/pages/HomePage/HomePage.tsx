import { Banner } from '../../comonents/Banner';
import { BrandNew } from '../../comonents/BrandNew';
import { Category } from '../../comonents/Category';
import { HotPrices } from '../../comonents/HotPrices';
import { Loader } from '../../comonents/Loader';
import { useProducts } from '../../comonents/ProductContext';

import './HomePage.scss';

export const HomePage = () => {
  const { isLoading, isError } = useProducts();

  return (
    <main className="home-page">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isError ? (
            <h1>{isError}</h1>
          ) : (
            <>
              <h1 className="home-page__title text text--h1">
                Welcome to Nice Gadgets store!
              </h1>

              <Banner />

              <BrandNew />

              <Category />

              <HotPrices />
            </>
          )}
        </>
      )}
    </main>
  );
};
