import classes from './BackDrop.module.css';
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
  const backDrop = (
    <div className={classes['back-drop']} onClick={props.onClick}></div>
  );
  return ReactDOM.createPortal(backDrop, document.getElementById('back-drop'));
};

export default BackDrop;
