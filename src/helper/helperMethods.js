const fetchPaginatedUsers = (setPaginatedUsers, users, currentPage) => {
  const current = (currentPage * 10) + 1;
  const filteredUsers = users.filter(
    (user) => (user.id >= current && user.id <= (current + 9)),
  );
  setPaginatedUsers(filteredUsers);
};

const fetchPages = (users, setPages, startPage) => {
  const count = Math.ceil(users.length / 10);
  const temp = count < (startPage + 3) ? count : (startPage + 3);
  const res = [];
  for (let i = startPage; i < temp; i += 1) {
    res.push(i + 1);
  }
  setPages(res);
};

export { fetchPages, fetchPaginatedUsers };
