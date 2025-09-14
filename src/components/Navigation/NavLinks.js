import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={classes['nav-link']}>
      <li>HomePage</li>
      <li>About</li>
      <li>Portfolio</li>
    </ul>
  );
};

export default NavLinks;
