import React from "react";
import cn from "classnames";
import * as PropTypes from "prop-types";
import s from "./Paginator.module.css";
import { maxValueOfFirstPortion } from "../../utils/constants";

const Paginator = function ({
  totalItems,
  perPage,
  currentPage = 1,
  onPageClick = () => {},
}) {
  const pagesCount = Math.ceil(totalItems / perPage);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }
  let portionNumber = 1;
  const portionSize = 2;
  const portionCount = Math.ceil(pagesCount / portionSize) - 1;
  if (currentPage > maxValueOfFirstPortion) {
    portionNumber = Math.ceil(currentPage / portionSize) - 1;
  }
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
            {pagesCount > 4 && <Dots />}
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
                  onPageClick(p, null);
                }}
                role="presentation"
              >
                {p}
              </li>
            );
          })}

        {portionNumber !== portionCount && pagesCount > maxValueOfFirstPortion && (
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
        {currentPage < pagesCount && pagesCount > maxValueOfFirstPortion && (
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
Arrow.propTypes = {
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  onPageClick: PropTypes.func,
  portionNumber: PropTypes.number,
  modifiedCurrentPage: PropTypes.number,
  whichPortionNumber: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
Arrow.defaultProps = {
  currentPage: 1,
  whichPortionNumber: 1,
  onPageClick: () => {},
  modifiedCurrentPage: 0,
  portionNumber: 1,
  text: "",
  className: "",
};
Paginator.propTypes = {
  totalItems: PropTypes.number,
  perPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentPage: PropTypes.number,
  onPageClick: PropTypes.func,
};
Paginator.defaultProps = {
  totalItems: 1,
  perPage: 10,
  currentPage: 1,
  onPageClick: () => {},
};
export default Paginator;
