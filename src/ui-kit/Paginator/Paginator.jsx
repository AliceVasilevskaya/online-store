import React from "react";
import cn from "classnames";
import s from "./Paginator.module.css";

const Paginator = function ({
  totalItems,
  perPage,
  currentPage = 1,
  onPageClick = () => {},
  portionSize = 2,
  portionNumber = 1,
}) {
  const pagesCount = Math.ceil(totalItems / perPage);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize + 2;
  return (
    <div className={s.pagination}>
      <ul>
        {currentPage !== 1 && (
          <Arrow
            currentPage={currentPage}
            whichPortionNumber={leftPortionPageNumber}
            portionNumber={portionNumber - 1}
            modifiedCurrentPage={currentPage - 1}
            onPageClick={onPageClick}
            text="﹤"
            className={s.btn}
          />
        )}
        {portionNumber !== 1 && (
          <>
            <Arrow
              onPageClick={onPageClick}
              modifiedCurrentPage={1}
              portionNumber={1}
              text={1}
              className={s.numb}
            />
            <Dots />
          </>
        )}

        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <li
                className={cn({ [s.active]: currentPage === p }, s.numb)}
                key={p}
                onClick={() => {
                  onPageClick(p);
                }}
                role="presentation"
              >
                {p}
              </li>
            );
          })}

        {portionNumber !== portionCount && (
          <>
            <Dots />
            <Arrow
              onPageClick={onPageClick}
              modifiedCurrentPage={pagesCount}
              portionNumber={portionCount}
              text={pagesCount}
              className={s.numb}
            />
          </>
        )}
        {currentPage < pagesCount && (
          <Arrow
            currentPage={currentPage}
            whichPortionNumber={rightPortionPageNumber}
            portionNumber={portionNumber + 1}
            modifiedCurrentPage={currentPage + 1}
            onPageClick={onPageClick}
            text="﹥"
            className={s.btn}
          />
        )}
      </ul>
    </div>
  );
};

const Arrow = function ({
  modifiedCurrentPage,
  currentPage,
  whichPortionNumber,
  portionNumber,
  onPageClick,
  text,
  className,
}) {
  return (
    <li
      className={className}
      onClick={() => {
        if (currentPage === whichPortionNumber) {
          onPageClick(modifiedCurrentPage, portionNumber);
        } else onPageClick(modifiedCurrentPage, false);
      }}
      role="presentation"
    >
      {text}
    </li>
  );
};
const Dots = function () {
  return (
    <li className={s.dots}>
      <span> . . . </span>
    </li>
  );
};
export default Paginator;
