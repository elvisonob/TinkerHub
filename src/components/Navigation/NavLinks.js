import classes from './NavLinks.module.css';

const NavLinks = (props) => {
  return (
    <ul className={classes['nav-link']}>
      <li>Home</li>
      <li>About Elvis</li>
      <li>Portfolio</li>
    </ul>
  );
};

export default NavLinks;
