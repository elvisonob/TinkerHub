import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks.js';
import classes from './MainNavigation.module.css';
import SideDrawer from './SideDrawer.js';
import { Fragment } from 'react';

const MainNavigation = () => {
  return (
    <Fragment>
      <MainHeader>
        <SideDrawer>
          <nav className={classes['nav__mobile']}>
            <NavLinks />
          </nav>
        </SideDrawer>
        <button className={classes['mobile__button']}>
          <span />
          <span />
          <span />
        </button>
        <h2>Elvis-Tech</h2>
        <nav className={classes['nav__desktop']}>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
