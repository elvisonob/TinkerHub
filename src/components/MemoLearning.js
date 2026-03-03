import dayjs from 'dayjs';
import '../i18n';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useTranslation } from 'react-i18next';

export default function MemoLearning() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
        timeout: 5,
      })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (err.code === 'ERR_CANCELLED') {
          console.log('Axios request canceled');
        } else if (err.code === 'ECONNABORTED') {
          console.error('Timeout: request took too long');
        } else {
          setError(err);
        }
      });

    return () => {
      console.log('abort');
      controller.abort();
    };
  }, []);
  return (
    <>
      <h1>Hello</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </>
  );
}
