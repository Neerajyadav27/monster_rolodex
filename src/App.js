import { Component } from "react";
import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: " ",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchFeild = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchFeild };
    });
  };

  render() {
    const { monsters, searchFeild } = this.state;
    const { onSearchChange } = this;

    const filterdMonster = monsters.filter((user) => {
      return user.name.toLowerCase().includes(searchFeild);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters-Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search-monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filterdMonster} />
      </div>
    );
  }
}

export default App;
