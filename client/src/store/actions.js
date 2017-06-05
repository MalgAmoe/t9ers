import { API } from '../middleware/api'

export const addNumber = (number) => {
  return {
    type: 'ADD_NUMBER',
    data: number
  }
}

export const eraseNumber = () => {
  return {
    type: 'ERASE_NUMBER'
  }
}

export const changeWord = () => {
  return {
    type: 'CHANGE_WORD'
  }
}

export const sendNumbers = (method, numbers) => {
  const body  = JSON.stringify({
    'numbers': numbers
  })
  return {
    type: API,
    method: method,
    body: body,
    endpoint: 'number'
  }
}
