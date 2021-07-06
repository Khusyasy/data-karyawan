import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.id}</td>
        </tr>
        <tr>
          <td width="200">Nama Lengkap</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.namaLengkap}</td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.alamat}</td>
        </tr>
        <tr>
          <td width="200">Provinsi</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.provinsi}</td>
        </tr>
        <tr>
          <td width="200">Kecamatan</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.kecamatan}</td>
        </tr>
        <tr>
          <td width="200">Posisi</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.posisi}</td>
        </tr>
        <tr>
          <td width="200">Kota</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.kota}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
