import { useState, useEffect } from 'react';

export default function Paris() {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTimer = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(
          'https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Paris',
        );
        const response = await data.json();

        const timer = response.dateTime.split('T')[1].split('.')[0];

        setData(timer);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTimer();
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : <h1>{data}</h1>}</div>;
}
