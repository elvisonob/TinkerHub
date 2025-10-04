const TodoList = ({ todoList, onDelete }) => {
  return (
    <div>
      {todoList.map((list) => (
        <div key={list.id}>
          {list.name}
          <button onClick={() => onDelete(list.id)}>DELETE</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
