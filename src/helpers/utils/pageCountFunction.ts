export function pageCountFunction(pageCount: number[], currentPage: number) {
  if (currentPage >= 4 && currentPage !== pageCount.length) {
    return pageCount.slice(currentPage - 3, currentPage + 1);
  }

  if (currentPage === pageCount.length) {
    return pageCount.slice(currentPage - 4, currentPage);
  }

  return pageCount.slice(0, 4);
}
