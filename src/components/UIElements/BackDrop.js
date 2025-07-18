import ReactDOM from 'react-dom';
import classes from './BackDrop.module.css';

const BackDrop = (props) => {
  const backdrop = (
    <div className={classes['back-drop']} onClick={props.onClick}></div>
  );

  return ReactDOM.createPortal(backdrop, document.getElementById('back-drop'));
};

export default BackDrop;
