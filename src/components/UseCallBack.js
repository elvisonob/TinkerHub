import { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';

function UseCallBack() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await data.json();

        if (!response.json) {
          console.log('Something is wrong');
        }
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Pagination Practice</h1>
      <Posts data={data} />
    </div>
  );
}

export default UseCallBack;
