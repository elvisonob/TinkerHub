import React from 'react';

const Posts = ({ data, isLoading }) => {
  if (isLoading) {
    <p>Loading...</p>;
  }
  return (
    <div>
      {
        <ul>
          {data.map((eachData) => (
            <li key={eachData.title}>{eachData.title}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Posts;
