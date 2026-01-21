import classes from './MUIfeature.module.css';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function Mui() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);
}
