import MainHeader from './MainHeader.js';
import classes from './MainNavigation.module.css';
import NavLinks from './NavLinks.js';
import SideDrawer from './SideDrawer.js';
import { Fragment } from 'react';

const MainNavigation = () => {
  return (
    <Fragment>
      <SideDrawer>
        <nav className={classes['nav-mobile']}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className={classes['mobile-button']}>
          <span />
          <span />
          <span />
        </button>
        <h2>Elvis-Tech</h2>
        <nav className={classes['nav-desktop']}>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
