export default function TodoList({ todo, removeTodo }) {
  return (
    <div>
      <h4>List of Todo</h4>
      {todo.map((todoList) => (
        <div key={todoList.id}>
          <li>{todoList.text}</li>
          <button onClick={() => removeTodo(todoList.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
