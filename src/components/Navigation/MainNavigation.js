import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks.js';
import classes from './MainNavigation.module.css';
import SideDrawer from './SideDrawer.js';
import { Fragment } from 'react';
import { useState } from 'react';
import Backdrop from '../UIElements/BackDrop.js';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className={classes['nav__mobile']}>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className={classes['mobile__button']} onClick={openDrawer}>
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
