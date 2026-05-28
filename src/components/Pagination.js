const Pagination = ({ totalPosts, postsPerPage, onSelect }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((eachNum) => (
        <li onClick={() => onSelect(eachNum)}>{eachNum}</li>
      ))}
    </ul>
  );
};

export default Pagination;
