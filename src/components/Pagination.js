import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import PaginationContext from '../context/PaginationContext';
import { fetchPages, fetchPaginatedUsers } from '../helper/helperMethods';
import '../styles/Pagination.css';

const Pagination = ({ users, setPaginatedUsers }) => {
  const [pages, setPages] = useState([]);
  const [startPage, setStartPage] = useState(0);
  useEffect(() => {
    fetchPages(users, setPages, startPage);
  }, [users, startPage]);

  const handlePageClick = (event) => {
    event.preventDefault();
    fetchPaginatedUsers(setPaginatedUsers, users, (Number(event.target.id) - 1));
  };

  const handlePrevButton = () => {
    if (startPage > 0) {
      setStartPage(startPage - 1);
    }
  };

  const handleNextButton = () => {
    if (startPage + 2 <= pages.length) {
      setStartPage(startPage + 1);
    }
  };

  return (
    <div>
      {
        pages && (
        <div className="pagination-main">
          <button type="button" onClick={handlePrevButton} disabled={startPage === 0}>Prev</button>
          {
          pages.map((page) => <button type="button" key={page} className="pagination-item" id={page} onClick={handlePageClick}>{page}</button>)
      }
          <button type="button" onClick={handleNextButton} disabled={startPage + 3 === Math.ceil(users.length / 10)}>Next</button>
          {/* {console.log(startPage, Math.ceil(users.length / 10))} */}
        </div>
        )
      }
    </div>
  );
};

Pagination.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  setPaginatedUsers: PropTypes.func.isRequired,
};

export default Pagination;
