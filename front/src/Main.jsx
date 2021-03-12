import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { isLog } from "./actions/users";
import RegistriesContainer from "./container/RegistriesContainer";
import AllRegistriesContainer from "./container/AllRegistriesContainer";
import Navbar from "./components/Navbar";
import NewRegistryContainer from "./container/NewRegistryContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RegistriesContainer} />
          <Route exact path="/newregistry" component={NewRegistryContainer} />
          <Route path="/allregistries" component={AllRegistriesContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLog: () => dispatch(isLog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
