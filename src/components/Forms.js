import React, { Component } from "react";
export default class Forms extends Component {
  state = { password: "" };
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.password);
  };

  render() {
    return (
      <>
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input
                type="text"
                value={this.state.password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
          </form>
          {this.state.password.length < 6
            ? "Password must be greater than 6 character"
            : ""}
        </div>
      </>
    );
  }
}
