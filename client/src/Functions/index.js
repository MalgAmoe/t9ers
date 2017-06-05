import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  changeWord,
  eraseNumber
} from '../store/actions';

const styles = {
  functionsContainer: {

  }
}

class Functions extends Component {

  handleChangeWord = () => {
    this.props.changeWord();
  }

  handleCancel = () => {
    this.props.eraseNumber();
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

const mapDispatchToProps = (dispatch) => ({
  changeWord: () => dispatch(changeWord()),
  eraseNumber: () => dispatch(eraseNumber()),
})

export default connect(null, mapDispatchToProps)(Functions)
