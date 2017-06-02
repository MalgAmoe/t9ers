import React, { Component } from 'react';
import './App.css';

const styles = {
  screen: {
    backgroundColor: '#00d300',
    width: 200,
    height: 80,
    textAlign: 'left',
    padding: 10,
    boxSizing: 'border-box'
  }
}

const acceptedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0'];

class App extends Component {
  state = {
    text: ''
  }

  inputHandler = (event) => {
    if (acceptedInputs.indexOf(event.key) !== -1) {
      this.setState({
        text: this.state.text + event.key
      })
    } else if (event.key === 'Backspace') {
      this.setState({
        text: this.state.text.slice(0, this.state.text.length - 1)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div style={styles.screen}>hey</div>
        <input
          style={styles.input}
          value={this.state.text}
          placeholder='1234567890*'
          onKeyDown={this.inputHandler}/>
      </div>
    );
  }
}

export default App;
