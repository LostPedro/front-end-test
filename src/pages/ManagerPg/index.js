import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.less";

import App from "../App";

class ManagerPg extends React.Component {
  _pageName = "router-page";

  constructor(props) {
    super(props);

    this.route = null;

    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  componentDidMount() {
    if (this.route && this.route.history) {
      this.route.history.listen(this.handleRouteChange);
      this.handleRouteChange(this.route.history.location);
    }
  }

  // -------------------------------------------------------------------------//
  // Requests
  // -------------------------------------------------------------------------//

  // -------------------------------------------------------------------------//
  // Event Handlers
  // -------------------------------------------------------------------------//

  handleRouteChange = (location) => {
    if (location) {
      let parsedLocation = location.pathname;

      if (parsedLocation.substr(1).indexOf("/") !== -1) {
        parsedLocation = parsedLocation.substr(
          0,
          parsedLocation.substr(1).indexOf("/") + 1
        );

        switch (parsedLocation) {
          case "/":
            break;
          default:
          // pass
        }
      }
    }
  };

  // -------------------------------------------------------------------------//
  // Render
  // -------------------------------------------------------------------------//
  render() {
    return (
      <Router
        ref={(input) => {
          this.route = input;
        }}
      >
        <div>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default ManagerPg;
