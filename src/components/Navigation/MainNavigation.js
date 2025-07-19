import MainHeader from './MainHeader.js';
import classes from './MainNavigation.module.css';
import NavLinks from './NavLinks.js';
import SideDrawer from './SideDrawer.js';
import { Fragment, useState } from 'react';
import BackDrop from '../UIElements/BackDrop.js';

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
      {drawerIsOpen && <BackDrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className={classes['nav-mobile']}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className={classes['mobile-button']} onClick={openDrawer}>
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
