import MainNavigation from './MainNavigation';
import classes from './MainHeader.module.css';
import { Fragment } from 'react';
import SideDrawer from './SideDrawer';
import { useState } from 'react';
import BackDrop from '../UIElements/BackDrop';

const MainHeader = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const open = () => {
    setDrawerIsOpen(true);
  };

  const close = () => {
    setDrawerIsOpen(false);
  };
  return (
    <Fragment>
      {drawerIsOpen && <BackDrop onClick={close} />}

      <SideDrawer show={drawerIsOpen}>
        <nav className={classes['menu-button__mobile']}>
          <ul className={classes['mobile-navlinks']}>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </nav>
      </SideDrawer>

      <div className={classes['main-header']}>
        <button className={classes['menu-button__span']} onClick={open}>
          <span />
          <span />
          <span />
        </button>
        <h1>ElvisTech</h1>
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
