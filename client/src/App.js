import React, { Component } from 'react';
import { connect } from 'react-redux';

import Screen from './Screen';
import KeyPad from './KeyPad';

import {
  changeWord,
  eraseNumber
} from './store/actions';

import './App.css';

const styles = {
  container: {

  }
}

class App extends Component {

  handleChangeWord = () => {
    this.props.changeWord();
  }

  handleCancel = () => {
    this.props.eraseNumber();
  }

  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          <Screen />
          <div style={styles.functionsContainer}>
            <button onClick={this.handleCancel}>C</button>
            <button onClick={this.handleChangeWord}>___</button>
          </div>
          <KeyPad />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  numbers: state.numbers
})

const mapDispatchToProps = (dispatch) => ({
  changeWord: () => dispatch(changeWord()),
  eraseNumber: () => dispatch(eraseNumber()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
