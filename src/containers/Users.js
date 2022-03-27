import React, { useContext, useState } from 'react';
import '../styles/Users.css';
import PaginationContext from '../context/PaginationContext';

const Users = () => {
  const users = useContext(PaginationContext);
  const [selectedUsers, setSelectedUser] = useState([]);
  // const [selectAllChecked, setSelectAllChecked] = useState(false);
  // console.log(users);
  const handleClickAll = () => {
    // setSelectAllChecked(event.target.checked);
    setSelectedUser(users.map((user) => user.id));
  };
  console.log(selectedUsers);
  const handleSingleUser = (event) => {
    // console.log(event.target.parentElement.parentElement.id);
    setSelectedUser(selectedUsers.filter(
      (user) => user.id !== event.target.parentElement.parentElement.id,
    ));
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

// Users.propTypes = {
//   users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
// };

export default Users;

// key={user.id} style={{ textAlign: 'left' }}
