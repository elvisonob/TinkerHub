import React from 'react';

const Posts = ({ loading, data }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {data.map((eachData) => (
        <li key={eachData.title}>{eachData.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
