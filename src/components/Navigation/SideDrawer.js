import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
  return <aside className={classes['side-drawer']}>{props.children}</aside>;
};

export default SideDrawer;
