import axios from "../../API/axios";
import { Component } from "react";
import Searchbar from "../SearchBar/Searchbar";
import ImageList from "../ImageList.js/ImageList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  onSearchSubmit = async (term) => {
    const {
      data: { results },
    } = await axios.get("search/photos", {
      params: { query: term },
    });

    this.setState({ images: results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
