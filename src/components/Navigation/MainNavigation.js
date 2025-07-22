import MainHeader from './MainHeader.js';
import NavLinks from './NavLinks.js';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <MainHeader>
      <nav className={classes['desktop-navlink']}>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
