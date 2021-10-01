import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        // console.log(users);
        this.setState({ monsters: users });
      })
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    })
    return (
      <div className="App">
        <input
          type="text" 
          placeholder="Search monsters ..." 
          onChange={evt => this.setState({ searchField: evt.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
