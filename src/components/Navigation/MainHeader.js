import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default MainHeader;
