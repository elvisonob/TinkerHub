import MainNavigation from './MainNavigation';
import classes from './MainHeader.module.css';
import { Fragment } from 'react';
import SideDrawer from './SideDrawer';

const MainHeader = () => {
  return (
    <Fragment>
      {/* <SideDrawer>
        <nav className={classes['menu-button__mobile']}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </SideDrawer> */}
      <div className={classes['main-header']}>
        <button className={classes['menu-button__span']}>
          <span />
          <span />
          <span />
        </button>
        <h1>Elvis-Tech</h1>
        <nav className={classes['menu-button__header-nav']}>
          <ul className={classes['main-navlinks']}>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default MainHeader;
