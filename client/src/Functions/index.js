import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeWord,
  eraseNumber,
  sendNumbers
} from '../store/actions';

const styles = {
  functionsContainer: {
    width: 160,
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(055, 155, 255, 0.4)',
    borderRadius: 5,
    margin: 10,
    padding: 5
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
        <button onClick={this.handleChangeWord}>Change Word</button>
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
