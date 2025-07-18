import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return <header className={classes.container}>{props.children}</header>;
};

export default MainHeader;
