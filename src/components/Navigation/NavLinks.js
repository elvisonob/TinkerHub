import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={classes['nav-link']}>
      <li>Home</li>
      <li>About</li>
      <li>Portfoli</li>
    </ul>
  );
};

export default NavLinks;
