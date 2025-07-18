import classes from './NavLinks.module.css';

const NavLinks = () => {
  return (
    <ul className={classes.navLinks}>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
    </ul>
  );
};

export default NavLinks;
