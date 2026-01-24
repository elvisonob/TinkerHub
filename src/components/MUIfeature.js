import classes from './MUIfeature.module.css';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function Mui() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>header</div>
      <div className={classes.leftMenu}>leftMenu</div>
      <div className={classes.main}>main</div>
      <div className={classes.rightMenu}>rightMenu</div>
      <div className={classes.footer}>footer</div>
    </div>
  );
}
