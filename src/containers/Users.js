import React, { useContext } from 'react';
import '../styles/Users.css';
import PaginationContext from '../context/PaginationContext';

const Users = () => {
  const users = useContext(PaginationContext);
  // console.log(users);
  return (
    <div>
      <table className="users-table">
        <tbody>
          <tr>
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
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>edit, delete</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

// Users.propTypes = {
//   users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
// };

export default Users;

// key={user.id} style={{ textAlign: 'left' }}
