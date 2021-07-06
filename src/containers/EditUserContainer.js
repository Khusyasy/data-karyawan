import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormEditComponent from "../components/FormEditComponent";
import { getUserDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";
import { Redirect } from "react-router";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
    this.setState({ redirect: true });
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User Updated!",
          "Nama : " +
            this.props.getResponDataUser.namaLengkap +
            " , Posisi : " +
            this.props.getResponDataUser.posisi +
            " , Alamat: " +
            this.props.getResponDataUser.alamat,
          "success"
        );
      }
      if (this.state.redirect) {
        return <Redirect push to="/Pegawai" />;
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormEditComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
