import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  return <div className={classes['side-drawer']}>{props.children}</div>;
};

export default SideDrawer;
