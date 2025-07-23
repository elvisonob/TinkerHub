import classes from './SideDrawer.module.css';
import ReactDOM from 'react-dom';

const SideDrawer = (props) => {
  const content = (
    <aside className={classes['side-drawer']}>{props.children}</aside>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
