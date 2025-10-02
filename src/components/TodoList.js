const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((list) => (
        <div key={list.id}>{list.name}</div>
      ))}
    </div>
  );
};

export default TodoList;
