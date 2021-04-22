import React, { Component } from "react"
import "./App.css"
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchString: "",
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ monsters: result })
      })
  }

  handleChange = (e) => {
    this.setState({ searchString: e.target.value })
  }

  render() {
    const { monsters, searchString } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox
          searchString={this.state.searchString}
          handleChange={this.handleChange}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App
