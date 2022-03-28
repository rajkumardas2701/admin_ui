import React from 'react';
import PropTypes from 'prop-types';
import '../styles/EditUser.css';

const EditUser = ({ userToEdit }) => {
  // console.log('from EditUser', userToEdit);
  const [{
    id, name, email, role,
  }] = userToEdit;
  return (
    <form className="edit-form">
      <div>
        ID:
        <input value={id} />
      </div>
      <div>
        Name:
        <input value={name} />
      </div>
      <div>
        Email:
        <input value={email} />
      </div>
      <div>
        Role:
        <input value={role} />
      </div>
    </form>
  );
};

EditUser.defaultProps = {
  userToEdit: [{
    id: 0, name: '', email: '', role: '',
  }],
  // setActivePage: () => {},
};

EditUser.propTypes = {
  userToEdit: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  // setSearchedUsers: PropTypes.func.isRequired,
};

export default EditUser;
