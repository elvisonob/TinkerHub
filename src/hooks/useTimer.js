import { useState, useEffect } from 'react';

export default function useTimer(city) {
  const [fetchedData, setFetchedData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimer = async () => {
      setIsFetching(true);
      try {
        const data = await fetch(
          `https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/${city}`,
        );

        if (!data.ok) {
          throw new Error('Failed to fetch time');
        }
        const response = await data.json();
        const timer = response.dateTime.split('T')[1].split('.')[0];

        setFetchedData(timer);
        setIsFetching(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTimer();
  }, [city]);
  return {
    fetchedData,
    isFetching,
    error,
  };
}
