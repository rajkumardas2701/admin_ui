import { useEffect } from 'react';
import Users from '../containers/Users';
import fetchUsers from '../utils/apiCalls';
import '../styles/App.css';

const App = () => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <p>Work in progress!!</p>
      <Users />
    </div>
  );
};

export default App;
