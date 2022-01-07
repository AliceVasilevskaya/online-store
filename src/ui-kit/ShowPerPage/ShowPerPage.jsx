import React from "react";
import styles from "./ShowPerPage.module.css";

const ShowPerPage = function ({ perPage, changePerPage }) {
  return (
    <div className={styles.perPage}>
      {`Show per page: `}
      <select name="perPage" value={perPage} onChange={changePerPage}>
        <option value="10" defaultValue="10">
          10
        </option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};
export default ShowPerPage;
