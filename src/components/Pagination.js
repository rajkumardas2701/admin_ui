import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import PaginationContext from '../context/PaginationContext';
import { fetchPages } from '../helper/helperMethods';
import '../styles/Pagination.css';

const Pagination = ({ users }) => {
  // const [firstPage, setFirstPage] = useState(1);
  // const users = useContext(PaginationContext);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    fetchPages(users, setPages);
  }, [users]);
  return (
    <ul className="pagination-main">
      <button type="button">Prev</button>
      {
          pages && pages.map((page) => <li key={page} className="pagination-item">{page}</li>)
      }
      <button type="button">Next</button>
    </ul>
  );
};

Pagination.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  // setUsers: PropTypes.func.isRequired,
};

export default Pagination;
