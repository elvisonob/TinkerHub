import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, addTodo } from './api/index.ts';
import { useState } from 'react';

const App = () => {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');

  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(search),
    queryKey: ['todos', { search }],
    staleTime: Infinity,
    cacheTime: 0,
  });

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
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

      {todos?.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
