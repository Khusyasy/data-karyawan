import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { FormGroup, Col, Label, Input, Row, Button } from "reactstrap";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import UserValidation from "../validations/UserValidation";
import { getProvinsiList } from "../actions/userAction";
import { getKotaList } from "../actions/userAction";
import { getKecamatanList } from "../actions/userAction";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    getProvinsi: state.users.getProvinsiList.provinsi,
    getKota: state.users.getKotaList.kota_kabupaten,
    getKecamatan: state.users.getKecamatanList.kecamatan,
    initialValues: {
      id: state.users.getUserDetail.id,
      namaLengkap: state.users.getUserDetail.namaLengkap,
      alamat: state.users.getUserDetail.alamat,
      provinsi: state.users.getUserDetail.provinsi,
      kecamatan: state.users.getUserDetail.kecamatan,
      posisi: state.users.getUserDetail.posisi,
      kota: state.users.getUserDetail.kota,
    },
  };
};

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idProv: "",
      idKota: "",
      getKota: "",
    };
  }

  componentDidMount() {
    this.props.dispatch(getProvinsiList());
  }

  renderTextField = ({
    label,
    input,
    disabled,
    meta: { touched, invalid, error },
  }) => (
    <Autocomplete
      options={this.props.getProvinsi}
      onChange={(event, newValue) => {
        if (newValue == null) {
          return true;
        } else this.props.dispatch(getKotaList(newValue.id));
        this.setState({ idProvinsi: newValue });
      }}
      getOptionLabel={(option) => option.nama}
      getOptionSelected={(option, value) => option.nama === value.nama}
      style={{ width: 540 }}
      disabled={this.props.getProvinsi === undefined}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          {...input}
          label={label}
          variant="standard"
          fullWidth
        />
      )}
    />
  );

  renderTextField2 = ({ label, input, meta: { touched, invalid, error } }) => (
    <Autocomplete
      options={this.props.getKota}
      onChange={(event, newValue) => {
        if (newValue == null) {
          return true;
        } else this.props.dispatch(getKecamatanList(newValue.id));
        this.setState({ idKota: newValue });
      }}
      getOptionLabel={(option) => option.nama}
      disabled={this.props.getKota === undefined}
      getOptionSelected={(option, value) => option.nama === value.nama}
      style={{ width: 540 }}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          {...input}
          label={label}
          variant="standard"
          fullWidth
        />
      )}
    />
  );

  renderTextField3 = ({ label, input, meta: { touched, invalid, error } }) => (
    <Autocomplete
      options={this.props.getKecamatan}
      onChange={(event, newValue) => {
        if (newValue == null) {
          return true;
        } else console.log(newValue);
      }}
      getOptionLabel={(option) => option.nama}
      disabled={this.props.getKecamatan === undefined}
      getOptionSelected={(option, value) => option.nama === value.nama}
      style={{ width: 540 }}
      renderInput={(params) => (
        <TextField
          {...params}
          required
          {...input}
          label={label}
          variant="standard"
          fullWidth
        />
      )}
    />
  );

  render() {
    console.log(this.props.getProvinsiList);
    console.log(this.props.getKotaList);
    console.log(this.props.getKecamatanList);
    console.log(this.props.idProv);
    console.log(this.props.idKota);
    const { getProvinsi, getKota, getKecamatan } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          {/* Nama */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="namaLengkap"
                component={renderField}
                label="Nama Lengkap :"
              />
            </FormGroup>
          </Col>
          {/* Nama */}
          {/* Alamat */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat :"
              />
            </FormGroup>
          </Col>
          {/* Alamat */}
          {/* posisi */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="posisi"
                component={renderField}
                label="Posisi :"
              />
            </FormGroup>
          </Col>
          {/* posisi */}
          {/* Provinsi */}
          <Col md={6}>
            <FormGroup>
              {getProvinsi && (
                <Field
                  name="provinsi"
                  component={this.renderTextField}
                  label="Provinsi"
                  variant="standard"
                />
              )}
            </FormGroup>
          </Col>
          {/* Provinsi */}

          {/* Kota */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kota"
                component={this.renderTextField2}
                options={getKota}
                label="Kota / Kabupaten"
              />
            </FormGroup>
          </Col>
          {/* Kota */}

          {/* kecamatan */}
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="kecamatan"
                component={this.renderTextField3}
                options={getKecamatan}
                label="Kecamatan"
              />
            </FormGroup>
          </Col>
          {/* kecamatan */}
        </FormGroup>
        <FormGroup row>
          <Col md="12" className="text-center">
            <FormGroup>
              <Button
                color="info"
                size="lg"
                style={{ width: 300 }}
                type="submit"
                disabled={this.props.submitting}
                onClick={<Link to="/Pegawai" />}
              >
                Kirim
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}
const Form = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(Form);
