import ReactDOM from 'react-dom';
import classes from './SideDrawer.module.css';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      time={200}
      unmountOnExit
      mountOnEnter
      classNames="slide-in-left"
    >
      <div className={classes['side-drawer']}>{props.children}</div>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
