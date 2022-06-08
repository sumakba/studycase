import React, { Component } from "react";
import SearchOpen from "./SearchOpen";
import SearchClose from "./SearchClose";

export default class Header extends Component {
  render(){
    return this.props.search ? <SearchOpen /> : <SearchClose />
}
}
