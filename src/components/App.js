import React, { useEffect, useState } from 'react';
import Users from '../containers/Users';
import fetchUsers from '../utils/apiCalls';
import Pagination from './Pagination';
import { fetchPaginatedUsers } from '../helper/helperMethods';
import '../styles/App.css';
import UserContext from '../context/UserContext';

const App = () => {
  const [users, setUsers] = useState([]);
  const [paginatedUsers, setPaginatedUsers] = useState(users);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  useEffect(() => {
    fetchPaginatedUsers(setPaginatedUsers, users, 0);
  }, [users]);
  return (
    <div className="App">
      <h3>Admin UI</h3>
      <input type="text" className="search-box" />
      <UserContext.Provider value={[users, paginatedUsers, setUsers, activePage]}>
        <Users />
      </UserContext.Provider>
      <Pagination
        users={users}
        setPaginatedUsers={setPaginatedUsers}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
};

export default App;
