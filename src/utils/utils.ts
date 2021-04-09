/* eslint-disable import/prefer-default-export */
export function getPagesCount(itemsCount: number, itemsPerPage: number) {
  return itemsCount % itemsPerPage === 0
    ? Math.floor(itemsCount / itemsPerPage)
    : Math.floor(itemsCount / itemsPerPage) + 1;
}
