import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount() {
    console.log(this.ref.current.clientHeight);
  }
  render() {
    const { urls, description } = this.props.image;
    return (
      <div>
        <img ref={this.ref} src={urls.regular} alt={description} />
      </div>
    );
  }
}
