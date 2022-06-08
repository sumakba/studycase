import React, { Component } from "react";

export default class NavMobile extends Component {
  render() {
    if (this.props.menu === true) {
      return (
        <div class="nav-mobile">
          <a href="#">Home</a>
          <a href="#">Corporate</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      );
    }
  }
}
