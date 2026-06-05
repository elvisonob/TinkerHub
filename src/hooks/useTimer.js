import { useState, useEffect } from 'react';

export default function useTimer(uniqueFetched) {
  const [fetchedData, setFetchedData] = useState(null);
  const [isFetching, setIsFetching] = useState();

  useEffect(() => {
    const fetchTimer = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    };

    fetchTimer();
  }, []);
}
