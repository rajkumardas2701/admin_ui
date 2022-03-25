import axios from 'axios';

const fetchUsers = async () => {
  try {
    const result = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
  // return result
};

export default fetchUsers;
