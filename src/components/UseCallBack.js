import { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';

function UseCallBack() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response = await data.json();
      setData(response);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const onClickPage = (num) => {
    setCurrentPage(num);
  };

  const indexOfLastItem = currentPage * postsPerPage;
  const indexOfFirstItem = indexOfLastItem - postsPerPage;
  const currentPost = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Posts data={currentPost} isLoading={loading} />
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        onSelect={onClickPage}
      />
    </div>
  );
}

export default UseCallBack;
