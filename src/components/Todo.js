import { useState, useEffect } from 'react';

const Todo = () => {
  const [directory, setDirectory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setDirectory(data);
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <h1>API Data fetched</h1>
      <div className="data-box">
        {directory.map((dir) => (
          <div className="card">
            <p>Name:{dir.name}</p>
            <p>Email:{dir.email}</p>
            <p>Website:{dir.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
