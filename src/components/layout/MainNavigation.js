import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return <header className={classes.header}>
    <div className={classes.logo}>Redcord</div>
    <nav>
        <ul>
            <li>
                <Link to='/' className={classes.padding}>Home</Link>
                <Link to='/login' className={classes.padding}>login</Link>
                <Link to='/post' className={classes.padding}>Post</Link>
                <Link to='/profile' className={classes.padding}>Profile</Link>
            </li>
        </ul>
    </nav>
  </header>;
}

export default MainNavigation;
