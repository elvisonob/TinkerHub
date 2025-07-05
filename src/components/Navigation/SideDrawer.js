import ReactDOM from 'react-dom';
import classes from './SideDrawer.module.css';

const SideDrawer = ({ children }) => {
  const content = <aside className={classes.sideDrawer}>{children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
