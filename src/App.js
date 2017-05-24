import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import AddButton from './AddButton'

class App extends Component {
  constructor(){
    super()
    this.addThing = this.addThing.bind(this)
    this.removeThing = this.removeThing.bind(this)
  }

  state = {
    things: {},
    nextThing: 1
  }

  removeThing(e){
    const name = e.target.closest('.details').querySelector('.name').textContent
    const thingsObj = {...this.state.things}
    for(let things in thingsObj){
      if(thingsObj[things].name === name){
        delete thingsObj[things]
      }
    }
    this.setState({things: thingsObj})
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
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="fieldDiv">
          <input className="thingField" type="text" placeholder="Write thing here"/>
        </div>
        <AddButton click={this.addThing}/>
        <ThingList things={this.state.things} remove={this.removeThing}/>
      </div>
    );
  }
}

export default App;
