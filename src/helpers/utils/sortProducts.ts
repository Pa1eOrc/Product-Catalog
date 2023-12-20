import { Product } from '../../type/Product';
import { calculateDiscountPercentage } from './calculateDiscountPercentage';

export function SortProducts(products: Product[], sort: string, query: string) {
  let sortedProducts: Product[] = [];

  switch (sort) {
    case 'age':
      sortedProducts = [...products].sort(
        (productA, productB) => productA.year - productB.year,
      );
      break;

    case 'name':
      sortedProducts = [...products].sort(
        (productA, productB) => productA.name.localeCompare(productB.name),
      );
      break;

    case 'price':
      sortedProducts = [...products].sort(
        (productA, productB) => {
          const absoluteDiscountA = calculateDiscountPercentage(
            productA.fullPrice, productA.price,
          );
          const absoluteDiscountB = calculateDiscountPercentage(
            productB.fullPrice, productB.price,
          );

          return +absoluteDiscountA - +absoluteDiscountB;
        },
      );
      break;

    default:
      sortedProducts = products;
  }

  if (query) {
    const queryArray = query.split(' ');

    queryArray.forEach(queryValue => {
      sortedProducts = sortedProducts.filter(
        product => product.name.toLowerCase(
        ).includes(queryValue.toLowerCase()),
      );
    });
  }

  return sortedProducts;
}
