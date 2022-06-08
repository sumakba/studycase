import React, { Component } from 'react'

export default class ThirdSection extends Component {
  render() {
    return (
        <div id="third" class="row text-center text-md-end">
        <div class="col-md-6">
          <img src="./img/Rectangle 4.jpg" class="img-fluid" />
        </div>
        <div class="col-md-6 p-5 d-flex justify-content-center flex-column">
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
      </div>
    )
  }
}
