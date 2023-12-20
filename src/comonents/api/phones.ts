import { Product } from '../../type/Product';
import { client } from '../../helpers/fetch/httpClient';
import {
  filterProductsByCategory,
} from '../../helpers/utils/sortHelperFunctions';

const url = '/products.json';

export async function getPhones() {
  const data = await client.get<Product[]>(url);

  return filterProductsByCategory(data, 'phones');
}
