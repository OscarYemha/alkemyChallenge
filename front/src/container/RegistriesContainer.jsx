import React from "react";
import { connect } from "react-redux";
import Registries from "../components/Registries";
import { fetchRegistries, fetchAllRegistries } from "../actions/registries";

class RegistriesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRegistries();
    this.props.fetchAllRegistries();
  }

  render() {
    return (
      <div>
        <Registries
          registries={this.props.registries}
          allRegistries={this.props.allRegistries}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registries: state.registries.registries,
    allRegistries: state.allRegistries.allRegistries,
  };
};

export default connect(mapStateToProps, {
  fetchRegistries,
  fetchAllRegistries,
})(RegistriesContainer);
