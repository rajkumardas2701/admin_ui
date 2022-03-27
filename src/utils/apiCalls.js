import axios from 'axios';

const fetchUsers = async (setUsers, setLoadingError) => {
  let result = [];
  try {
    result = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
    if (result.data) {
      setUsers(result.data);
      setLoadingError(false);
    }
  } catch (error) {
    setLoadingError(true);
  }
};

export default fetchUsers;
