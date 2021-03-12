import React from "react";
import NewRegistry from "../components/NewRegistry";
import { connect } from "react-redux";
import { createNewRegistry } from "../actions/registries";

class NewRegistryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      date: "",
      description: "",
      type: "",
    };

    this.handleAmount = this.handleAmount.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAmount(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  handleDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  handleDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleType(e) {
    this.setState({
      type: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();

    this.props.createNewRegistry({
      amount: this.state.amount,
      date: this.state.date,
      description: this.state.description,
      type: this.state.type,
    });

    // this.setState({
    //   amount: "",
    //   date: "",
    //   description: "",
    //   type: "",
    // });
  }

  render() {
    return (
      <div>
        <NewRegistry
          handleAmount={this.handleAmount}
          handleDate={this.handleDate}
          handleDescription={this.handleDescription}
          handleType={this.handleType}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state newregistrycontainer", state);
  return {};
};

export default connect(mapStateToProps, { createNewRegistry })(
  NewRegistryContainer
);
