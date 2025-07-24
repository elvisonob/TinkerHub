import MainHeader from './MainHeader';
import NavLinks from './NavLinks.js';
import classes from './MainNavigation.module.css';
import SideDrawer from './SideDrawer.js';
import { useState, Fragment } from 'react';
import BackDrop from '../UIElements/BackDrop';

const MainNavigation = () => {
  const [drawerIsClose, setDrawerIsClose] = useState(false);

  const openDrawer = () => {
    setDrawerIsClose(true);
  };

  const closeDrawer = () => {
    setDrawerIsClose(false);
  };
  return (
    <Fragment>
      {drawerIsClose && <BackDrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsClose}>
        <nav className={classes['mobile-nav-view']}>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className={classes['nav-mobile-bar']} onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h2>Elvis-Tech</h2>
        <nav className={classes['desktop-nav-view']}>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
