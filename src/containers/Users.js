import React, { useContext, useState } from 'react';
import '../styles/Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../context/UserContext';
import EditUser from '../components/EditUser';

const Users = () => {
  const [users, paginatedUsers, setUsers, activePage, loadingError] = useContext(UserContext);
  const [selectedUsers, setSelectedUser] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});
  const handleClickAll = (event) => {
    if (!event.target.checked) {
      setSelectedUser([]);
    } else {
      const currPage = ((activePage - 1) * 10) + 1;
      setSelectedUser(users.slice(currPage - 1, currPage + 9).map((user) => user.id));
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
  const handleDeleteSelectUser = () => {
    setUsers(users.filter((user) => !selectedUsers.includes(user.id)));
  };
  const handleEditUser = (event) => {
    // console.log('id from edit handler',
    // typeof event.target.parentElement.parentElement.parentElement.id,
    // event.target.parentElement.parentElement.parentElement.id,
    // event.target.parentElement.parentElement.id);
    // console.log(event);
    setUserToEdit(users.filter(
      (user) => user.id === event.target.parentElement.parentElement.id,
    ));
    setShowEdit(!showEdit);
  };
  const handleDeleteUser = (event) => {
    event.preventDefault();
    setUsers(users.filter(
      (user) => user.id !== event.target.parentNode.parentNode.parentElement.id,
    ));
  };
  return (
    <div className="users-body">
      {
        loadingError ? (<p className="user-load-error">Failed to load users, please check your internet connectivity.</p>) : (
          <table className="users-table">
            <tbody>
              <tr className="table-head">
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
            paginatedUsers.map((user) => (
              <tr key={user.id} id={user.id} className="table-rows">
                <td><input type="checkbox" checked={selectedUsers.includes(user.id)} onChange={handleSingleUser} /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <FontAwesomeIcon icon={faPenToSquare} className="edit-user" onClick={handleEditUser} />
                  <FontAwesomeIcon icon={faTrash} className="delete-user" onClick={handleDeleteUser} />
                </td>
              </tr>
            ))
          }
            </tbody>
          </table>
        )
      }
      <button type="button" onClick={handleDeleteSelectUser} className="select-delete-btn">Delete selected user(s)</button>
      {/* {console.log(userToEdit)} */}
      {showEdit && <EditUser userToEdit={userToEdit} />}
    </div>
  );
};

export default Users;
