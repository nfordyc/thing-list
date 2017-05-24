import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'

class App extends Component {
  constructor(){
    super()
    this.addThing = this.addThing.bind(this)
  }

  state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk'},
      'thing-2': { id: 'thing-2', name: 'Bread'},
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce'}
    },
    thingCount: 4
  }

  addThing(e){
    let thingsObj = {...this.state.things}
    let name = document.querySelector('.thingField').value
    thingsObj[`thing-${this.state.thingCount}`] = { 
      id: `thing-${this.state.thingCount}`, name: name
    }

    this.setState({
      things: thingsObj,
      thingCount: ++this.state.thingCount
    },
      () => console.log(this.state))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="fieldDiv">
          <input className="thingField" type="text" placeholder="Write thing here"/>
        </div>
        <AddButton click={this.addThing}/>
        <ThingList things={this.state.things}/>
      </div>
    );
  }
}

export default App;
