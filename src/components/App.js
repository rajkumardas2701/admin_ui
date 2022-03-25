import { useEffect, useState } from 'react';
import Users from '../containers/Users';
import fetchUsers from '../utils/apiCalls';
import '../styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers(setUsers);
  }, []);
  return (
    <div className="App">
      <h3>Admin UI</h3>
      <input type="text" />
      <Users users={users} />
    </div>
  );
};

export default App;
