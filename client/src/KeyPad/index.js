import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  addNumber,
  eraseNumber,
  sendNumbers
} from '../store/actions';

const styles = {
  keysContainer: {

  }
}

const acceptedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0'];

class KeyPad extends Component {

  inputHandler = (event) => {
    if (acceptedInputs.indexOf(event.key) !== -1) {
      this.props.addNumber(event.key);
    } else if (event.key === 'Backspace') {
      this.props.eraseNumber()
    }
  }

  handleSend = () => {
    this.props.sendNumbers('POST', this.props.numbers);
  }

  render(){
    return(
      <div style={styles.keysContainer}>
        <input
          style={styles.input}
          value={this.props.numbers}
          placeholder='1234567890*'
          onKeyDown={this.inputHandler}/>
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  numbers: state.numbers
})

const mapDispatchToProps = (dispatch) => ({
  addNumber: (numbers) => dispatch(addNumber(numbers)),
  eraseNumber: () => dispatch(eraseNumber()),
  sendNumbers: (method, body) => dispatch(sendNumbers(method, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyPad)
