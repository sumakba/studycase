import React, { Component } from 'react'

export default class SearchOpen extends Component {
  render() {
    return (
        <div className="sticky-top pb-4 pt-4 bg-white">
        <div className="container-md">
          <div className="row">
            <div className="col-12 d-flex flex-row align-items-center justify-content-between">
              <div className="logotype flex-grow-0">STUDYCASE</div>
              <div
                className="text-uppercase d-flex flex-grow-1 d-none justify-content-center"
                id="nav"
              >
                <a href="#">Home</a>
                <a href="#second" className="active">
                  Corporate
                </a>
                <a href="#third">Services</a>
                <a href="#fourth">Blog</a>
                <a href="#">Contact</a>
              </div>
              <div
                id="search"
                className="text-uppercase d-flex flex-grow-1 d-none d-sm-flex justify-content-center"
              >
                <form className="d-flex flex-grow-1 align-items-center">
                  <input
                    className="d-flex flex-grow-1 align-items-center"
                    type="text"
                    placeholder="Arama..."
                  />
                </form>
              </div>
              <div>
                <img
                  src="./img/search.png"
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "10px",
                  }}
                  alt="Search"
                  onClick={() => {
                    this.setState({
                    search: this.search = !this.search
                 });
                  }}
                />
                <img
                  src="./img/close.png"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "10px",
                  }}
                  alt="Close"
                  onClick={() => {
                    this.setState({
                    search: this.search = !this.search
                 });
                  }}
                />
                <img
                  src="./img/menu.png"
                  style={{ width: "18px", height: "18px" }}
                  alt="Menu"
                  className="d-md-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
