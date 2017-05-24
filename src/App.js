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
    things: {},
    nextThing: 1
  }

  addThing(e){
    let thingsObj = {...this.state.things}
    let name = document.querySelector('.thingField').value
    thingsObj[`thing-${this.state.nextThing}`] = { 
      id: `thing-${this.state.nextThing}`, name: name
    }

    this.setState({
      things: thingsObj,
      nextThing: ++this.state.nextThing
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
