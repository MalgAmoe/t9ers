import React, { Component } from 'react';

import Screen from './Screen';
import KeyPad from './KeyPad';
import Functions from './Functions';

import './App.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div style={styles.container}>
          <Screen />
          <Functions />
          <KeyPad />
        </div>
      </div>
    );
  }
}

export default App;
