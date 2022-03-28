import React, { useEffect, useState } from 'react';
import Users from '../containers/Users';
import fetchUsers from '../utils/apiCalls';
import Pagination from './Pagination';
import { fetchPaginatedUsers } from '../helper/helperMethods';
import '../styles/App.css';
import UserContext from '../context/UserContext';
import Search from './Search';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState(users);
  const [paginatedUsers, setPaginatedUsers] = useState(searchedUsers);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchUsers(setUsers, setLoadingError);
  }, []);
  useEffect(() => {
    setSearchedUsers(users);
  }, [users]);
  useEffect(() => {
    fetchPaginatedUsers(setPaginatedUsers, searchedUsers, 0);
  }, [searchedUsers]);
  return (
    <div className="App">
      <h3 className="header">Admin UI</h3>
      <div className="app-body">
        <Search users={users} setSearchedUsers={setSearchedUsers} />
        <UserContext.Provider value={
          [searchedUsers, setSearchedUsers, paginatedUsers, setUsers, activePage, loadingError]
}
        >
          <Users />
        </UserContext.Provider>
        <Pagination
          searchedUsers={searchedUsers}
          setPaginatedUsers={setPaginatedUsers}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  );
};

export default App;
