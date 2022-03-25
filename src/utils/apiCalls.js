import axios from 'axios';

const fetchUsers = async (setUsers) => {
  let result = [];
  try {
    result = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
    console.log(result.data);
    if (result.data) {
      setUsers(result.data);
    }
  } catch (error) {
    // console.log(error);
  }
};

export default fetchUsers;
