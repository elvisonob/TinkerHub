import ReactDOM from 'react-dom';
import classes from './BackDrop.module.css';

const BackDrop = (props) => {
  const backDrop = (
    <div className={classes['back-drop']} onClick={props.onClick}>
      {props.children}
    </div>
  );
  return ReactDOM.createPortal(backDrop, document.getElementById('back-drop'));
};

export default BackDrop;
