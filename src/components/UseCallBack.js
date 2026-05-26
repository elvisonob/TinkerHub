import { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';

function UseCallBack() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const data = await response.json();
        setLoading(false);

        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const onClickPage = () => {
    setCurrentPage((curr) => curr + 1);
  };
  console.log(data);

  const indexOfLastPost = currentPage * postsPerPage; // 20
  const indexOfFirstPost = indexOfLastPost - postsPerPage; //20 - 20 = 1
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost); // 1, 19
  return (
    <div>
      <h1>My Blog</h1>
      <Posts loading={loading} data={currentPosts} />
      <Pagination
        totalPosts={data.length}
        onSelectPage={onClickPage}
        postsPerPage={postsPerPage}
      />
    </div>
  );
}

export default UseCallBack;
