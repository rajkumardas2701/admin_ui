import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPages, fetchPaginatedUsers } from '../helper/helperMethods';
import '../styles/Pagination.css';

const Pagination = ({
  searchedUsers, setPaginatedUsers, activePage, setActivePage,
}) => {
  const [pages, setPages] = useState([]);
  const [startPage, setStartPage] = useState(0);
  useEffect(() => {
    fetchPages(searchedUsers, setPages, startPage);
  }, [searchedUsers, startPage]);

  const handlePageClick = (event) => {
    event.preventDefault();
    fetchPaginatedUsers(setPaginatedUsers, searchedUsers, (Number(event.target.id) - 1));
    setActivePage(Number(event.target.id));
  };

  const handlePrevButton = () => {
    if (startPage > 0) {
      setStartPage(startPage - 1);
      fetchPaginatedUsers(setPaginatedUsers, searchedUsers, startPage - 1);
      setActivePage(startPage);
    }
  };

  const handleNextButton = () => {
    if (startPage + 2 <= pages.length) {
      setStartPage(startPage + 1);
      fetchPaginatedUsers(setPaginatedUsers, searchedUsers, startPage + 1);
      setActivePage(startPage + 2);
    }
  };

  return (
    <div>
      {
        pages && (
        <div className="pagination-main">
          <button type="button" onClick={handlePrevButton} disabled={startPage === 0}>Prev</button>
          {
          pages.map(
            (page) => <button type="button" key={page} className={`pagination-item ${activePage === page ? 'active-page' : ''}`} id={page} onClick={handlePageClick}>{page}</button>,
          )
      }
          <button type="button" onClick={handleNextButton} disabled={startPage + 3 === Math.ceil(searchedUsers.length / 10)}>Next</button>
        </div>
        )
      }
    </div>
  );
};

Pagination.defaultProps = {
  activePage: 1,
  setActivePage: () => {},
};

Pagination.propTypes = {
  searchedUsers: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  activePage: PropTypes.number,
  setActivePage: PropTypes.func,
  setPaginatedUsers: PropTypes.func.isRequired,
};

export default Pagination;
