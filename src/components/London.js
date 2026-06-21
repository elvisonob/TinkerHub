import useTimer from '../hooks/useTimer';

export default function London() {
  const { fetchedData, isFetching, error } = useTimer('London');

  if (error) return <h1>{error}</h1>;

  return <div>{isFetching ? <h1>Coming...</h1> : <h1>{fetchedData}</h1>}</div>;
}
