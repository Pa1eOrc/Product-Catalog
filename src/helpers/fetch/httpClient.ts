// eslint-disable-next-line max-len
const BASE_URL = 'https://pa1eorc.github.io/Product-Catalog/api/';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function request<T>(url: string): Promise<T> {
  return wait(300)
    .then(() => fetch(BASE_URL + url))
    .then(response => response.json());
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
