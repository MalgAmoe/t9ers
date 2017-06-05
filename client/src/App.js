import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';

import {
  addNumber,
  eraseNumber,
  sendNumbers,
  changeWord
} from './store/actions';

import './App.css';

const styles = {
  container: {

  },
  screenContainer: {

  }
}

const acceptedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0'];

class App extends Component {

  inputHandler = (event) => {
    if (acceptedInputs.indexOf(event.key) !== -1) {
      this.props.addNumber(event.key);
    } else if (event.key === 'Backspace') {
      this.props.eraseNumber()
    }
  }

  handleSend = () => {
    const numbers  = JSON.stringify({
      'numbers': this.props.numbers
    })
    this.props.sendNumbers('POST', numbers);
  }

  handleChangeWord = () => {
    this.props.changeWord()
  }

  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          <div style={styles.screenContainer}>
            <Screen />
          </div>
          <button onClick={this.handleChangeWord}>Next Word</button>
          <div style={styles.numbers}>
            <input
              style={styles.input}
              value={this.props.numbers}
              placeholder='1234567890*'
              onKeyDown={this.inputHandler}/>
            <button onClick={this.handleSend}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numbers: state.numbers
})

const mapDispatchToProps = (dispatch) => ({
  addNumber: (numbers) => dispatch(addNumber(numbers)),
  eraseNumber: () => dispatch(eraseNumber()),
  sendNumbers: (method, body) => dispatch(sendNumbers(method, body)),
  changeWord: () => dispatch(changeWord())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
