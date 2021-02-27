import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import SingUp from '../SignUp';
import SignIn from '../SignIn';

const WelcomePage = () =>{
  return(
    <div>
      <Header />
        <BrowserRouter>
          <Switch>
            <Route path='/' component={SignIn} />
            <Route path='/' component={SingUp} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default WelcomePage;