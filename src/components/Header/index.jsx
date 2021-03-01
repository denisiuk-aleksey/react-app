import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SingUpPage from '../../pages/SingUp';
import SignInPage from '../../pages/SingIn';
import styles from './style.module.scss';



const Header = props => {
  console.log(styles);

  return (
    <header>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="../../pages/SingUp">Sing Up</Link>
            </li>
            <li>
              <Link to="../../pages/SingIn">Sign In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='../../pages/SingUp' component={SingUpPage} />
          <Route path='../../pages/SingIn' component={SignInPage} />
        </Switch>

      </BrowserRouter>
    </header>
  );
}

export default Header
