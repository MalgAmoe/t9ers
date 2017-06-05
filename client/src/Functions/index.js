import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeWord,
  eraseNumber,
  sendNumbers
} from '../store/actions';

const styles = {
  functionsContainer: {

  }
}

class Functions extends Component {

  handleChangeWord = () => {
    this.props.changeWord();
  }

  handleCancel = async() => {
    await this.props.eraseNumber();
    this.props.sendNumbers('POST', this.props.numbers);
  }

  render() {
    return (
      <div style={styles.functionsContainer}>
        <button onClick={this.handleCancel}>C</button>
        <button onClick={this.handleChangeWord}>___</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  numbers: state.numbers
})

const mapDispatchToProps = (dispatch) => ({
  changeWord: () => dispatch(changeWord()),
  eraseNumber: () => dispatch(eraseNumber()),
  sendNumbers: (method, body) => dispatch(sendNumbers(method, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Functions)
