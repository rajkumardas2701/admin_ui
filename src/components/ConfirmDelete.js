import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import '../styles/ConfirmDelete.css';

const ConfirmDelete = ({ userToEdit, setShowConfirmDelete, showConfirmDelete }) => {
  const [users, setUsers] = useContext(UserContext);
  const [{ id }] = userToEdit;
  const handleSubmit = () => {
    setUsers(users.filter(
      (user) => user.id !== id,
    ));
    setShowConfirmDelete(!showConfirmDelete);
  };
  const handleCancel = () => {
    setShowConfirmDelete(!showConfirmDelete);
  };
  return (
    <div className="delete-window">
      <p>Are you sure you want to delete user(s)?</p>
      <div className="btn-section">
        <button type="button" onClick={handleSubmit}>Yes</button>
        <button type="button" onClick={handleCancel}>No</button>
      </div>
    </div>
  );
};

ConfirmDelete.defaultProps = {
  userToEdit: [{
    id: 0, name: '', email: '', role: '',
  }],
};

ConfirmDelete.propTypes = {
  userToEdit: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  showConfirmDelete: PropTypes.bool.isRequired,
  setShowConfirmDelete: PropTypes.func.isRequired,
};

export default ConfirmDelete;
