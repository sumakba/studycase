import React, { Component } from 'react'

export default class FourthSection extends Component {
  render() {
    return (
      <div id="fourth" class="row pt-5 pb-5 d-flex">
        <div
          class="col-md-6 p-5 d-flex justify-content-center flex-column order-sm-1 order-md-0"
        >
          <h4>LOREM IPSUM DOLOR SIT AMET</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="col-md-6 order-sm-0 order-md-1">
          <img src="./img/Rectangle 5.jpg" class="img-fluid" />
        </div>
      </div>
    )
  }
}
