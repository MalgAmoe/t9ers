import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
  screen: {
    backgroundColor: 'rgba(055, 155, 255, 0.4)',
    width: 170,
    height: 80,
    textAlign: 'left',
    padding: 10,
    borderRadius: 5,
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
