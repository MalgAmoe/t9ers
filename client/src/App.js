import React, { Component } from 'react';

import Screen from './Screen';
import KeyPad from './KeyPad';
import Functions from './Functions';

import './App.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 50,
    paddingBottom: 10,
    borderRadius: 60
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
