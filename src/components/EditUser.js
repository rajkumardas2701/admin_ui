import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../context/UserContext';
import '../styles/EditUser.css';

const EditUser = ({ userToEdit, setShowEdit, showEdit }) => {
  const [{
    id, name, email, role,
  }] = userToEdit;

  const [searchedUsers, setSearchedUsers] = useContext(UserContext);

  const [userName, setName] = useState(name);
  const [userEmail, setEmail] = useState(email);
  const [userRole, setRole] = useState(role);
  const handleSubmit = () => {
    const idx = searchedUsers.findIndex((obj) => obj.id === id);
    searchedUsers[idx].name = userName;
    searchedUsers[idx].email = userEmail;
    searchedUsers[idx].role = userRole;
    setSearchedUsers(searchedUsers);
    setShowEdit(!showEdit);
  };
  const handleCancel = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div id="edit-form-body">
      <form className="edit-form">
        <div className="form-elements">
          <p>Name</p>
          <input className="input-elements" value={userName} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-elements">
          <p>Email</p>
          <input className="input-elements" value={userEmail} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-elements">
          <p>Role</p>
          <select className="input-elements" defaultValue={userRole === 'admin' ? 'admin' : 'member'} onChange={(e) => setRole(e.target.value)}>
            <option>admin</option>
            <option>member</option>
          </select>
        </div>
        <div className="form-elements btn-section">
          <button type="button" onClick={handleSubmit}>Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

EditUser.defaultProps = {
  userToEdit: [{
    id: 0, name: '', email: '', role: '',
  }],
};

EditUser.propTypes = {
  userToEdit: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  showEdit: PropTypes.bool.isRequired,
  setShowEdit: PropTypes.func.isRequired,
};

export default EditUser;
