import React, { Component } from 'react';


export default class FirstSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogtitle: "Blog Title",
      category: "Category Name"
      };
  }
  render() {
    return (
        <>
        <div class="row">
        <div class="col-md-7">
          <img src="./img/Rectangle 2.jpg" class="img-fluid" alt="Alternate text" />
          <div class="d-flex flex-row justify-content-center">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
        <div class="col-md-5 p-5">
          <h3 className='text-uppercase font-weight-bold'>{this.state.blogtitle}</h3>
          <p class="text-danger text-uppercase">{this.state.category}</p>
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
          <div class="share">
            <div>
              Paylaş:
              <img
                src="./img/facebook.png"
                style={{width: "16px", height: "16px", marginLeft: "10px"}}
                alt=""
              />
              <img
                src="./img/twitter.png"
                style={{width: "18px", height: "18px", marginLeft: "10px"}}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
        </>
    )
  }
}
