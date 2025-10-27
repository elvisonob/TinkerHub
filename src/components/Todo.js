import { useState, useEffect } from 'react';

const Todo = () => {
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      console.log(data);
      setDirectory(data);
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <div>
        <h1>API Data Fetched</h1>
      </div>

      <div className="grid">
        {directory.map((dir) => (
          <div className="card" key={dir.id}>
            <div>Name: {dir.name}</div>
            <div>Email: {dir.email}</div>
            <div>Website: {dir.website}</div>
            <div>Address: {dir.address.street}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
