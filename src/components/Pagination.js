import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import PaginationContext from '../context/PaginationContext';
import { fetchPages, fetchPaginatedUsers } from '../helper/helperMethods';
import '../styles/Pagination.css';

const Pagination = ({ users, setPaginatedUsers }) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    fetchPages(users, setPages);
  }, [users]);

  const handlePageClick = (event) => {
    event.preventDefault();
    fetchPaginatedUsers(setPaginatedUsers, users, (Number(event.target.id) - 1));
  };

  return (
    <div className="pagination-main">
      <button type="button">Prev</button>
      {
          pages && pages.map((page) => <button type="button" key={page} className="pagination-item" id={page} onClick={handlePageClick}>{page}</button>)
      }
      <button type="button">Next</button>
    </div>
  );
};

Pagination.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  setPaginatedUsers: PropTypes.func.isRequired,
};

export default Pagination;
