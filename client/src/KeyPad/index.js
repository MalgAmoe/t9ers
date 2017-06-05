import React, { Component } from 'react';
import { connect } from 'react-redux';

import NumberKey from './components/NumberKey';

import {
  addNumber,
  eraseNumber,
  sendNumbers
} from '../store/actions';

const styles = {
  keysContainer: {
    width: 160,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(055, 155, 255, 0.4)',
    padding: 5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  }
}

const acceptedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0'];
const characters = ['.,?!', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz', '+', '_'];

class KeyPad extends Component {

  addNumberHandler = async(number) => {
    await this.props.addNumber(number);
    this.props.sendNumbers('POST', this.props.numbers);
  }

  render(){
    return(
      <div style={styles.keysContainer}>
        {
          acceptedInputs.map((key, i) => (
            <NumberKey
              key={i}
              number={acceptedInputs[i]}
              letters={characters[i]}
              addNumber={this.addNumberHandler}/>
          ))
        }
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
