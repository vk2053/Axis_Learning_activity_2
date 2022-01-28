import React, { Component } from 'react';

export default class Componentclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          c: 0,
          show: true
        };
      }
    
      Incrementnumber = () => {
        this.setState({ c: this.state.c + 1 });
      }
      Decreasenumber = () => {
        this.setState({ c: this.state.c - 1 });
      }
  render() {
    return <div style={{textAlign : 'center', margin: 100}}>
        <h2>Class Component</h2>
        <button onClick={this.Incrementnumber}>Increment</button>
        { this.state.show ? <h2>{ this.state.c }</h2> : '' }
        <button onClick={this.Decreasenumber}>Decrement</button>
        
        
    </div>;
  }
}
