const fetchPaginatedUsers = (setPaginatedUsers, users, firstPage) => {
  // for (let i = firstPage; i < 10; i += 1) {
  //   filteredUsers.push(Number(users.id) === i);
  // }
  // console.log(typeof users);
  const filteredUsers = users.filter(
    (user) => (user.id >= firstPage && user.id <= (firstPage + 9)),
  );
  // console.log(typeof filteredUsers);
  setPaginatedUsers(filteredUsers);
};

const fetchPages = (users, setPages) => {
  const count = Math.ceil(users.length / 10);
  const res = [];
  for (let i = 0; i < count; i += 1) {
    res.push(i + 1);
  }
  setPages(res);
};

export { fetchPages, fetchPaginatedUsers };
