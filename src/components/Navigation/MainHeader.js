import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <div className={classes.container}>
      <div className={classes['mobile__span']}>
        <span />
        <span />
        <span />
      </div>
      <h2>Elvis-Tech</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
