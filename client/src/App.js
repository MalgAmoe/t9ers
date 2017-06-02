import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumber, eraseNumber } from './store/actions';
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

  inputHandler = (event) => {
    if (acceptedInputs.indexOf(event.key) !== -1) {
      this.props.addNumber(event.key);
    } else if (event.key === 'Backspace') {
      this.props.eraseNumber()
    }
  }

  handleSend = () => {
    console.log('sending');
  }

  handleChangeWord = () => {
    console.log('change word');
  }

  render() {
    return (
      <div className="App">
        <div style={styles.screen}>hey</div>
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
    );
  }
}

const mapStateToProps = (state) => ({
  numbers: state.numbers
})

const mapDispatchToProps = (dispatch) => ({
  addNumber: (numbers) => dispatch(addNumber(numbers)),
  eraseNumber: () => dispatch(eraseNumber())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
