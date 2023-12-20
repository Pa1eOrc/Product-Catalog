import { Product } from '../../type/Product';
import * as sortFunction from '../../helpers/utils/sortHelperFunctions';
import { client } from '../../helpers/fetch/httpClient';

export function getProducts() {
  return client.get<Product[]>('/products.json');
}

export const getHotPriceProducts = (products: Product[]) => {
  const filteredProducts = sortFunction.filterProductsByDiscount(products);
  const sortedProducts = sortFunction
    .sortProductsByAbsoluteDiscount(filteredProducts);

  return sortedProducts;
};

export const getBrandNewProducts = (products: Product[]) => {
  const filteredProductsByAge = sortFunction
    .filterProductsByAge(products);
  const filteredProductsByPrice = sortFunction
    .sortProductsByPrice(filteredProductsByAge);

  return filteredProductsByPrice;
};

export const getSuggestedProducts = (
  products: Product[], id: string, count: number,
) => {
  const productsRandom = [];
  const availableProducts = sortFunction.filterProductsById(products, id);

  if (availableProducts.length < count) {
    productsRandom.push(...availableProducts);
  } else {
    const shuffledProducts = availableProducts.sort(
      () => Math.random() - 0.5,
    );

    productsRandom.push(...shuffledProducts.slice(0, count));
  }

  return productsRandom;
};
