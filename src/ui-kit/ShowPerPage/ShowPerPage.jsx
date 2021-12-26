import React from "react";

const ShowPerPage = function ({ perPage, handleChange }) {
  return (
    <div>
      Show per page:
      <select name="perPage" value={perPage} onChange={handleChange}>
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
