import React, { Component } from "react";
import Header from "./components/Header";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import PegawaiContainer from "./containers/PegawaiContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/home" exact component={HomeContainer} />
          <Route path="/pegawai" exact component={PegawaiContainer} />
          <Route path="/create" exact component={CreateUserContainer} />

          <Route path="/detail/:id" exact component={DetailUserContainer} />

          <Route path="/edit/:id" exact component={EditUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}
