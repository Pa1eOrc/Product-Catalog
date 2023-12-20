import { Link } from 'react-router-dom';
import { useProducts } from '../ProductContext';

import './Category.scss';
import { filterProductsByCategory }
  from '../../helpers/utils/sortHelperFunctions';

export const Category = () => {
  const { links, products } = useProducts();

  const renderContext = (link: string) => {
    let title = '';
    let productType = '';

    if (link === 'tablets') {
      title = 'Tablets';
      productType = 'tablets';
    }

    if (link === 'accessories') {
      title = 'Accessories';
      productType = 'accessories';
    }

    if (link === 'phones') {
      title = 'Mobile phones';
      productType = 'phones';
    }

    const filteredProducts = filterProductsByCategory(products, productType);

    return (
      <>
        <h3 className="text text--h3">{title}</h3>
        <p className="text text--gray">
          {`${filteredProducts.length} models`}
        </p>
      </>
    );
  };

  return (
    <section className="home-page__category category">
      <h1 className="text text--h2">
        Shop by category
      </h1>

      <ul className="category__container">
        {links.slice(0, 3).map(link => (
          <li
            key={link}
            data-cy="categoryLinksContainer"
            className="category__link-container"
          >
            <Link
              to={`/${link}`}
              className={`category__link category__link--${link}`}
            >
              <img
                src={`img/category-${link}.png`}
                alt="category"
                className="category__img"
              />
            </Link>

            <div className="category__title-container">
              {renderContext(link)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
