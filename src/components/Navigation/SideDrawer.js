import classes from './SideDrawer.module.css';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      classNames="slide-in-left"
      timeout={200}
      unmountOnExit
      mountOnEnter
    >
      <aside className={classes['side-drawer']}>{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
