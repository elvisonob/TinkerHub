import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks.js';
import classes from './MainNavigation.module.css';
import { useState, Fragment } from 'react';
import SideDrawer from './SideDrawer.js';
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
      {drawerIsClose && (
        <SideDrawer>
          <nav className={classes['mobile-navLink']}>
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className={classes['nav-bars']} onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h2>Elvis-Tech</h2>
        <nav className={classes['desktop-navLink']}>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
