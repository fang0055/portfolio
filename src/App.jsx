import React from "react";
import { HashRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

class App extends React.Component {
  componentDidMount() {
    window.location = "https://portfolio-qwik-linkfang.vercel.app/web-apps/";
  }

  render() {
    return (
      <HashRouter basename="/">
        <Helmet>
          <title>Zhou's Portfolio</title>
        </Helmet>
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            color: "darkgray",
          }}
        >
          <p>Redirecting to Zhou's new portfolio web app...</p>
        </div>
      </HashRouter>
    );
  }
}

export default App;
