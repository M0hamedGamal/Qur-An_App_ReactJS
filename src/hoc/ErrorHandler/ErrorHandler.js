import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";
import { connect } from "react-redux";

class ErrorHandler extends Component {
  state = {
    error: null,
  };

  componentDidMount() {
    if (this.props.burgerBuilderError || this.props.orderError) {
      this.setState({
        error: "Check Your Network!",
      });
    }
    if (!this.props.authTokenError) {
      this.setState({
        error: "You Need to be an Authorized. Please signup first.",
      });
    }
  }
  errorConfirmedHandler = () => {
    this.setState({
      error: null,
    });
  };

  render() {
    return (
      <Auxiliary>
        <Modal
          show={this.state.error}
          cancelledOrder={this.errorConfirmedHandler}
        >
          {this.state.error ? this.state.error : null}
        </Modal>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(ErrorHandler);
