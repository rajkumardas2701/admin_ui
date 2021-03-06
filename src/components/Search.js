import React, { useEffect, useState } from 'react';
import '../styles/Search.css';
import PropTypes from 'prop-types';

const Search = ({ users, setSearchedUsers }) => {
  const [searchString, setSearchString] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };
  useEffect(() => {
    if (searchString === '') {
      setSearchedUsers(users);
    } else {
      setSearchedUsers(users.filter((user) => (
        user.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
      || (user.email.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
      || (user.role.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)));
    }
  }, [searchString]);
  return (
    <div className="search-component">
      <input type="text" className="search-box" value={searchString} onChange={handleChange} placeholder="search by user, email or role" />
    </div>
  );
};

Search.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  setSearchedUsers: PropTypes.func.isRequired,
};

export default Search;
