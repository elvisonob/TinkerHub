export default function TodoList({ todo }) {
  return (
    <div>
      <h4>List of Todo</h4>
      {todo.map((todoList) => (
        <div key={todoList.id}>
          <li>{todoList.text}</li>
        </div>
      ))}
    </div>
  );
}
