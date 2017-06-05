import React from 'react'

const styles = {
  key: {
    width: 50,
    height: 30,
    borderRadius: 10,
    margin: 1,
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  number: {
    fontSize: '1em'
  },
  letters: {
    fontSize: '0.6em'
  }
}

const NumberKeys = ({number, letters, addNumber}) => {

  const add = () => {
    addNumber(number)
  }

  return (
    <div
      style={styles.key}
      onClick={add}>
      <span style={styles.number}>{number} </span>
      <span style={styles.letters}>{letters}</span>
    </div>
  )
}

export default NumberKeys
