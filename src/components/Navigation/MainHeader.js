import MainNavigation from './MainNavigation';
import classes from './MainHeader.module.css';
import { Fragment } from 'react';
import SideDrawer from './SideDrawer';
import { createPortal } from 'react-dom';

const MainHeader = () => {
  return (
    <Fragment>
      {createPortal(
        <SideDrawer>
          <nav className={classes['menu-button__mobile']}>
            <ul className={classes['mobile-navlinks']}>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
            </ul>
          </nav>
        </SideDrawer>,
        document.getElementById('sideDrawer-Portal')
      )}

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
