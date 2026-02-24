// 'https://jsonplaceholder.typicode.com/todos'
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
        res.json(),
      ),
  });

  if (error) return <p>An error occured</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data.map((todo) => (
        <div>
          <h1>ID: {todo.id}</h1>
          <h1>TITLE: {todo.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
