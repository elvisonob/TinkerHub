import classes from './NavLinks.module.css';

const NavLinks = () => {
  return (
    <div className={classes.navLinks}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
      </ul>
    </div>
  );
};

export default NavLinks;
