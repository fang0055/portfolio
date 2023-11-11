import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "./pages/MobileAppsPage";
import "./pages/WebAppsPage";
import "./pages/DesignPages";
import MobileAppsPage from "./pages/MobileAppsPage";
import WebAppsPage from "./pages/WebAppsPage";
import DesignPages from "./pages/DesignPages";
import { Helmet } from "react-helmet";

class App extends React.Component {
  state = {
    currentPage: 0,
    indicationItem: "indicationLine",
  };

  activateMobileApps = () => {
    this.setState({ currentPage: 1 });
    this.setState({ indicationItem: "indicationLine activeMA" });
  };

  activateWebApps = () => {
    this.setState({ currentPage: 2 });
    this.setState({ indicationItem: "indicationLine activeWA" });
  };

  activateDesignWorks = () => {
    this.setState({ currentPage: 3 });
    this.setState({ indicationItem: "indicationLine activeDW" });
  };

  componentDidMount() {
    let currentPageName = window.location.href;
    let index = currentPageName.lastIndexOf("/");
    currentPageName = currentPageName.slice(index + 1, currentPageName.length);

    switch (currentPageName) {
      case "mobile-apps":
      case "portfolio":
      case "":
        this.setState({ currentPage: 1 });
        this.setState({ indicationItem: "indicationLine activeMA" });
        break;

      case "web-apps":
        this.setState({ currentPage: 2 });
        this.setState({ indicationItem: "indicationLine activeWA" });
        break;

      case "design-works":
        this.setState({ currentPage: 3 });
        this.setState({ indicationItem: "indicationLine activeDW" });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <HashRouter basename="/">
        <Helmet>
          <title>Zhou's Portfolio</title>
        </Helmet>
        <header className="appHeader"></header>

        <nav>
          <span className={this.state.indicationItem}></span>
          <Link
            to="/mobile-apps"
            onClick={this.activateMobileApps}
            className={this.state.currentPage === 1 ? "active" : ""}
          >
            Mobile Apps
          </Link>

          <Link onClick={this.activateWebApps} className={this.state.currentPage === 2 ? "active" : ""} to="/web-apps">
            Web Apps
          </Link>

          <Link
            onClick={this.activateDesignWorks}
            className={this.state.currentPage === 3 ? "active" : ""}
            to="/design-works"
          >
            Design Works
          </Link>
        </nav>

        <Switch>
          <Route exact path={["/mobile-apps", "/"]}>
            <MobileAppsPage />
          </Route>

          <Route path="/web-apps">
            <WebAppsPage />
          </Route>

          <Route path="/design-works">
            <DesignPages />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
