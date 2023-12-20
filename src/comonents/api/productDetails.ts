import { ProductDeatails } from '../../type/ProductDetails';
import { client } from '../../helpers/fetch/httpClient';

export function getProductsDetails(category: string) {
  return client.get<ProductDeatails[]>(`/${category}.json`);
}
