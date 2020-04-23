import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import './pages/MobileAppsPage'
import './pages/WebAppsPage'
import './pages/DesignPages'
import MobileAppsPage from './pages/MobileAppsPage';
import WebAppsPage from './pages/WebAppsPage';
import DesignPages from './pages/DesignPages';

class App extends React.Component{

  render(){
    return (
      <BrowserRouter basename='/portfolio'>
        <header className='appHeader'>

        </header>

        <nav>
          <Link to='/mobileapps'>Mobile Apps</Link>

          <Link to='/webapps'>Web Apps</Link>

          <Link to='/designworks'>Design Works</Link>
        </nav>

        <Switch>
          <Route exact path={['/mobileapps', '/']}>
            <MobileAppsPage/>
          </Route>

          <Route path='/webapps'>
            <WebAppsPage/>
          </Route>

          <Route path='/designworks'>
            <DesignPages/>
          </Route>
        </Switch>


      </BrowserRouter>

    )
  }
}

export default App;
