const Pagination = ({ postsPerPage, totalPosts, onSelectPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((eachNum) => (
          <li
            key={eachNum}
            onClick={() => {
              onSelectPage();
            }}
          >
            {eachNum}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
