import React, { useContext, useState } from 'react';
import '../styles/Users.css';
import PaginationContext from '../context/PaginationContext';

const Users = () => {
  const users = useContext(PaginationContext);
  const [selectedUsers, setSelectedUser] = useState([]);
  const handleClickAll = (event) => {
    if (!event.target.checked) {
      setSelectedUser([]);
    } else {
      setSelectedUser(users.map((user) => user.id));
    }
  };
  const handleSingleUser = (event) => {
    if (!selectedUsers.includes(event.target.parentElement.parentElement.id)) {
      setSelectedUser([...selectedUsers, event.target.parentElement.parentElement.id]);
    } else {
      setSelectedUser(selectedUsers.filter(
        (id) => id !== event.target.parentElement.parentElement.id,
      ));
    }
  };
  return (
    <div>
      <table className="users-table">
        <tbody>
          <tr>
            <th>
              <input type="checkbox" onChange={handleClickAll} />
            </th>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Role
            </th>
            <th>
              Actions
            </th>
          </tr>
          {
            users.map((user) => (
              <tr key={user.id} id={user.id}>
                <td><input type="checkbox" checked={selectedUsers.includes(user.id)} onChange={handleSingleUser} /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>edit, delete</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button type="button">Delete selected user(s)</button>
    </div>
  );
};

export default Users;
