import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import './App.css'
import './pages/MobileAppsPage'
import './pages/WebAppsPage'
import './pages/DesignPages'
import MobileAppsPage from './pages/MobileAppsPage'
import WebAppsPage from './pages/WebAppsPage'
import DesignPages from './pages/DesignPages'
import {Helmet} from 'react-helmet'

class App extends React.Component{

  state={
    currentPage: 0,
    indicationItem: 'indicationLine'
  }

  activateMobileApps = ()=>{
    this.setState({ currentPage: 1 })
    this.setState({indicationItem: 'indicationLine activeMA'})
  } 

  activateWebApps = ()=>{
    this.setState({ currentPage: 2 })
    this.setState({indicationItem: 'indicationLine activeWA'})
  } 

  activateDesignWorks = ()=>{
    this.setState({ currentPage: 3 })
    this.setState({indicationItem: 'indicationLine activeDW'})
  }

  componentDidMount(){
    let currentPageName = window.location.href
    let index = currentPageName.lastIndexOf('/')
    currentPageName = currentPageName.slice(index+1, currentPageName.length)
    
    switch (currentPageName) {
      case 'mobileapps':
        this.setState({currentPage: 1})
        this.setState({indicationItem: 'indicationLine activeMA'})
        break;

      case 'webapps':
        this.setState({ currentPage: 2 })
        this.setState({indicationItem: 'indicationLine activeWA'})
        break;

      case 'designworks':
        this.setState({currentPage: 3})
        this.setState({indicationItem: 'indicationLine activeDW'})
        break;
    
      default:
        break;
    }
  }

  render(){
    return (
      <BrowserRouter basename='/portfolio'>
        <Helmet>
          <title>Zhou's Portfolio</title>
        </Helmet>
        <header className='appHeader'>

        </header>

        <nav>
          <span className={this.state.indicationItem}></span>
          <Link to='/mobileapps'
          onClick={ this.activateMobileApps }
          className={ this.state.currentPage === 1 ? 'active' : '' }>
            Mobile Apps
          </Link>

          <Link
          onClick={this.activateWebApps }
          className={ this.state.currentPage === 2 ? "active" : '' }
          to='/webapps'>
            Web Apps
          </Link>

          <Link 
          onClick={ this.activateDesignWorks }
          className={ this.state.currentPage === 3 ? "active" : '' }
          to='/designworks'>
            Design Works
          </Link>
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
