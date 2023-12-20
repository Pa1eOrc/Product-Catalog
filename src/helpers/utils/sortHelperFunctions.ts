import { Product } from '../../type/Product';
import { calculateDiscountPercentage }
  from './calculateDiscountPercentage';

export function filterProductsByDiscount(products: Product[]): Product[] {
  return products.filter(product => product.price < product.fullPrice);
}

export function sortProductsByAbsoluteDiscount(products: Product[]): Product[] {
  return products.sort((productA: Product, productB: Product) => {
    const absoluteDiscountA = calculateDiscountPercentage(
      productA.fullPrice, productA.price,
    );
    const absoluteDiscountB = calculateDiscountPercentage(
      productB.fullPrice, productB.price,
    );

    return Number(absoluteDiscountB) - Number(absoluteDiscountA);
  });
}

export function filterProductsByAge(products: Product[]): Product[] {
  return products.sort((productA: Product, productB: Product) => {
    return productB.year - productA.year;
  });
}

export function sortProductsByPrice(products: Product[]): Product[] {
  return products.sort((productA: Product, productB: Product) => {
    return productB.price - productA.price;
  });
}

export function filterProductsByCategory(
  products: Product[], category: string,
): Product[] {
  return products.filter(product => product.category === category);
}

export function filterProductsById(
  products: Product[], id: string,
) {
  return products.filter(
    product => product.id !== id,
  );
}
