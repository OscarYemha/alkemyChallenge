import React from "react";
import { connect } from "react-redux";
import AllRegistries from "../components/AllRegistries";
import { fetchAllRegistries, deleteRegistry } from "../actions/registries";

class AllRegistriesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllRegistries();
  }

  handleDelete(registry) {
    console.log(registry);
    this.props.deleteRegistry(registry).then(() => {
      this.props.fetchAllRegistries();
    });
  }

  render() {
    return (
      <div>
        <AllRegistries
          allRegistries={this.props.allRegistries}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allRegistries: state.allRegistries.allRegistries,
  };
};

export default connect(mapStateToProps, {
  fetchAllRegistries,
  deleteRegistry,
})(AllRegistriesContainer);
