import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteDataUser } from "../actions/userAction";
import { Container } from "reactstrap";

class PegawaiContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser());
  }

  render() {
    return (
      <Container>
        <div>
          <TableComponent />
        </div>
      </Container>
    );
  }
}

export default connect()(PegawaiContainer);
