import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { span: 0 };
  }
  componentDidMount() {
    this.ref.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const height = this.ref.current.clientHeight;
    const span = Math.ceil(height / 150);
    this.setState({ span });
  };
  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.ref} src={urls.regular} alt={description} />
      </div>
    );
  }
}
