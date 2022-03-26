const fetchPaginatedUsers = (setPaginatedUsers, users, currentPage) => {
  const current = (currentPage * 10) + 1;
  const filteredUsers = users.filter(
    (user) => (user.id >= current && user.id <= (current + 9)),
  );
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
