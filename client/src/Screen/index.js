import React, { Component } from 'react';
import { connect } from 'react-redux';

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

class Screen extends Component {
  render() {
    return (
      <div style={styles.screen}>{this.props.words[this.props.selectedWord]}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  words: state.words,
  selectedWord: state.selectedWord
})

export default connect(mapStateToProps)(Screen)
