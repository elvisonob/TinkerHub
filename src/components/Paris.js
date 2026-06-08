import useTimer from '../hooks/useTimer';

export default function London() {
  const { fetchedData, isFetching, error } = useTimer('Finland');

  if (error) return <h1>{error}</h1>;

  return <div>{isFetching ? <h1>Loading...</h1> : <h1>{fetchedData}</h1>}</div>;
}
