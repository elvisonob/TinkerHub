import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={classes['nav-link']}>
      <li>Home</li>
      <li>About-Me</li>
      <li>Portfolio 2</li>
    </ul>
  );
};

export default NavLinks;
