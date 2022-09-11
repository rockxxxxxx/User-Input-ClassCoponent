import "./App.css";
import Forms from "./components/Forms";
import React from "react";
import Unsplash from "./api/Unsplash";
import ImagesList from "./components/ImagesList";

class App extends React.Component {
  state = { images: [] };
  onFormSubmit = async (data) => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: data,
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <Forms onSubmit={this.onFormSubmit} />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;
