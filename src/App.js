import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchTodos, addTodo } from './api/index.ts';
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        {data?.map((todo) => (
          <div key={todo.id}>
            <button
              onClick={async () => {
                try {
                  await addTodoMutation({ title });
                  setTitle('');
                } catch (e) {
                  console.log(e);
                }
              }}
            >
              Add todo
            </button>
            <h1>{todo.titles}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
