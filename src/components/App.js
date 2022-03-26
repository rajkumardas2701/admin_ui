import React, { useEffect, useState } from 'react';
import Users from '../containers/Users';
import fetchUsers from '../utils/apiCalls';
import Pagination from './Pagination';
import { fetchPaginatedUsers } from '../helper/helperMethods';
import '../styles/App.css';
import PaginationContext from '../context/PaginationContext';

const App = () => {
  const [users, setUsers] = useState([]);
  const [paginatedUsers, setPaginatedUsers] = useState(users);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  useEffect(() => {
    fetchPaginatedUsers(setPaginatedUsers, users, 1);
  }, [users]);
  return (
    <div className="App">
      <h3>Admin UI</h3>
      <input type="text" className="search-box" />
      <PaginationContext.Provider value={paginatedUsers}>
        <Users />
      </PaginationContext.Provider>
      <Pagination users={users} />
    </div>
  );
};

export default App;
