import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users }) => (
  <div>
    <table>
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
    </table>
  </div>
);

Users.propTypes = {
  users: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Users;

// key={user.id} style={{ textAlign: 'left' }}
