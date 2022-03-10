import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { Component } from 'react';


class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    return(
      <div className="App">
      <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
