import React, { FC } from 'react';
import s from './Pagination.module.scss';
import { calculatePagination } from '../../../../utils/calculatePagination';


type propsType = {
  pagesCount: number;
  currentPage: number;
  pageClickHandler: (page: number) => void;
}

export const Pagination: FC<propsType> = ({ currentPage, pageClickHandler,pagesCount }) => {

  return (
    <div className={s.main}>
      {calculatePagination(currentPage,pagesCount).map((p, index) => (
          p 
          ? <div
            className={`${s.page_number} ${p === currentPage ? s.page_active : ''}`}
            onClick={() => pageClickHandler(p)}
            key={index}
          >
            {p}
          </div>
          : <div key={index} className={s.page_dots}>...</div>)
      )}
    </div>
  )
}
