type CalPagination = (currentPage: number, pagesCount: number) => (number | undefined)[]

export const calculatePagination: CalPagination = (currentPage, pagesCount) => {

  const pagesArray = [];

  if (pagesCount > 10) {

    pagesArray[0] = 1;
    pagesArray[8] = pagesCount;

    if (currentPage < 6) {
      for (let i = 2; i < 8; i++) {
        pagesArray[i - 1] = i
      }
    } else if (currentPage > pagesCount - 6) {
      for (let i = 7; i > 1; i--) {
        pagesArray[i] = pagesCount + i - 8
      }
    } else {
      for (let i = 3; i < 8; i++) {
        pagesArray[i - 1] = currentPage + i - 5
      }
    }

  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pagesArray.push(i)
    }
  }

  return [...pagesArray]
}