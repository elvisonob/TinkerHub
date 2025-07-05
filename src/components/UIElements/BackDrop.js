import ReactDOM from 'react-dom';
import React from 'react';
import classes from './BackDrop.module.css';

const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.backdrop} onClick={props.onClick}></div>,
    document.getElementById('back-drop')
  );
};

export default BackDrop;
