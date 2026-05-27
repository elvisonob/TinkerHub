import React from 'react';

const Posts = ({ data }) => {
  return (
    <ul>
      {data.map((eachData) => (
        <li key={eachData.title}>{eachData.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
